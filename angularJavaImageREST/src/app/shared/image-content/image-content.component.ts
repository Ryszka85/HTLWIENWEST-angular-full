import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {CdkVirtualScrollViewport} from "@angular/cdk/scrolling";
import {BehaviorSubject, Observable, of, Subject} from "rxjs";
import {Select, Store} from "@ngxs/store";
import {ImagesByTagState} from "../app-state/states/images-by-tag-state";
import {ImageModelList} from "../domain/imageModel/image-model-list";
import {ImageModel, ImageViewModel} from "../domain/imageModel/image.model";
import {map, switchMap, tap, throttleTime} from "rxjs/operators";
import {ImageTile} from "./image-tile";
import {TileRandomizer} from "./tile-randomizer";
import {Tile} from "./tile";
import {ImageRequestService} from "../../serviceV2/image-request.service";
import {
  GetDownloadDetails,
  GetImageByImageId, GetRelatedImagesByTagIDs,
  ImagesByTagsAction,
  ImagesByUserIDAction,
  ImagesNextPageAction,
  SelectImage
} from "../app-state/actions/image.action";
import {ImagesByTagNameQueryImpl, ImagesByTagNameWithFilterOpt} from "../domain/imageModel/ImagesByTagNameQuery";
import {Router} from "@angular/router";
import {Navigate} from "@ngxs/router-plugin";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {SignupComponent} from "../signup/signup.component";
import {ImageDetailViewComponent} from "../image-detail-view/image-detail-view.component";
import {BaseUserDetails} from "../domain/userModel/user-details.model";
import {LoggedUserDetailsState} from "../app-state/states/logged-user-details.state";

@Component({
  selector: 'app-image-content',
  templateUrl: './image-content.component.html',
  styleUrls: ['./image-content.component.scss']
})
export class ImageContentComponent implements OnInit {

  @Input('data') models: Observable<ImageModel[]>;
  @Input('isProfile') isProfile: boolean;

  panelOpenState = false;
  //fetched data
  public data: ImageModel[];
  @Select(ImagesByTagState.getData) fData$: Observable<ImageModel[]>;
  @Select(LoginStateModel.loggedUserId) $loggedUserId;
  @Select(LoginStateModel.loggedInUser) $loggedUser;
  @Select(ImagesByUserIdState.getData) $imageData;
  loggedUserState: BaseUserDetails;
  hover: boolean = false;
  editable: boolean = false;


  //AutoScroll
  @ViewChild(CdkVirtualScrollViewport)
  viewport: CdkVirtualScrollViewport;
  test = new Array<string>();
  end = false;
  offset = new Subject();
  evenRowLimit = new Subject<boolean>();
  infinite: Observable<any[]>;
  showLoadBtn: boolean;
  dataEvenRowSize: number;
  breakpoint: any;
  downloadLink: any;
  rows = new Subject<ImageRowView[]>();
  imageViewModel: ImageViewModel[];

  constructor(private store: Store,
              public imgReqService: ImageRequestService,
              private router: Router,
              private updateUserService: UpdateUserService,
              private dialog: MatDialog,
              private downloadService: ImageDownloadService) {
  }


  ngOnInit(): void {

    this.models.subscribe(value => {
      const imageRowViews: ImageRowView[] = ImageRowMapper.mapToImageRow(value);
      // if (imageRowViews) console.log(imageRowViews.length);
      this.rows.next(imageRowViews);
      // let countRow: number = 0;
      // let countItem: number = 0;
      // let rowModels: ImageRowView[] = [];
      // let temp: ImageModel[] = [];
      // let diffRatio: ImageRowView = {row: null, content: []};
      // if (value !== undefined && value !== null) {
      //   value.forEach((value1, index) => {
      //     countItem++;
      //     if (countItem <= 3) temp.push(value1);
      //     if (countItem == 3) {
      //       countItem = 0;
      //       rowModels.push({row: countRow, content: temp});
      //       temp = [];
      //       countRow++;
      //     }
      //     if (index == value.length - 1) {
      //       rowModels.push({row: countRow, content: temp});
      //     }
      //   })
      //   console.log(rowModels);
      // }
    })

    this.$loggedUserId.subscribe(id => {
      console.log(id);
      this.models.subscribe(data => {
        if (data) {
          for (let i = 0; i < data.length; i++) {
            if (data[i].user.userId !== id) {
              // console.log(data[i]);
              // console.log(id);
              this.editable = false;
              break;
            } else {
              this.editable = true;
            }
          }
        }
      })
    })

    console.log(this.editable);

    // const batchMap = this.offset.pipe(
    //   throttleTime(500),
    //   tap(x => console.log(x))
    // );
    //
    //
    // batchMap.subscribe(value => console.log(value))

    // this.fData$.subscribe(value => {
    //   if (value !== undefined && value != null) {
    //     this.dataEvenRowSize = Math.floor(value.length / 3);
    //     this.data = value;
    //     this.evenRowLimit.next(true)
    //   }
    // })

  }

  public nextBatch(e, offset) {
    if (this.end) { return; }
    const end = this.viewport.getRenderedRange().end;
    var total = this.viewport.getDataLength();
    console.log(total);
    console.log(end);
    this.offset.subscribe(value => console.log(value));
    if (end == total) this.offset.next(offset);
  }

  public getBatch(lastSeen: string) {

  }

  onResize($event: any) {

  }

  enter() {
    this.hover = true;
    console.log(this.hover);
  }

  leave() {
    this.hover = false;
    console.log(this.hover);
  }

  download(img: ImageModel): void {
    console.log(img)
    this.store.dispatch(new GetImageByImageId(img.imageId))
    this.router.navigate(['image', { imageId: img.imageId }]);
  }

  clickedTag(tag: string) {
    this.store.dispatch(new ImagesByTagsAction(
      new ImagesByTagNameWithFilterOpt(null, tag)))
      .subscribe(value => {
        console.log(value);
        console.log("Search pressed..");
        this.router.navigate(['/image-by-tags']);
      });
    /*this.store.dispatch(
      new ImagesByTagsAction(new ImagesByTagNameQueryImpl(tag))
    ).subscribe(value => {
      /!*this.store.dispatch(new Navigate(['/image-by-tags']))*!/
      this.router.navigate(['image-by-tags'])
    });*/

  }

  reachedLastEvenElement(val) {
    console.log(val)
  }

  track(index: number, el: any): number {
    return index;
  }

  loadNextPage() {
    this.store.dispatch(new ImagesNextPageAction(this.data))
  }

  navigateToUser(item: ImageModel): void {
    console.log(item.user.userId);
    this.store.dispatch(
      new Navigate(['profile', {userId: item.user.userId}])
    )
  }

  showImageDetailDialog(item: ImageModel): void {
    this.store.dispatch(new SelectImage(item))
      .subscribe(value => {
        const ref = new MatDialogConfig();
        this.dialog.open(ImageDetailViewComponent,
          {
            width: '1150px',
            height: '600px',
            data: item
            // disableClose: true,
            // autoFocus: false
          });
      })

  }

  changeImageDetails(item: ImageModel): void {
    if (this.isProfile && this.editable) {
      this.store.dispatch(new SelectImage(item))
      this.dialog.open(ChangeImageDetailsDialogComponent,
        {
          width: '780px',
          height: '780px',
          data: item,
          panelClass: 'change-img-details'
        }
      );
    }
  }


  showAddTagsDialog(item: ImageModel): void {
    const ref = new MatDialogConfig();
    // ref.disableClose = true;
    this.store.dispatch(new SelectImage(item))
    this.dialog.open(AddTagsDialogComponent,
      {
        width: '435px',
        height: '600px',
        data: item,
        panelClass: 'add-tag-dialog'
      }
    );

    this.dialog.afterAllClosed
      .subscribe(value => {
        console.log("FOO")
        this.store.dispatch(new Navigate(['profile', {userId: item.user.userId}]))
      })
  }

  // when not logged user likes image then redirect to login page

  likeImage(item: ImageModel, userId: string): void {
    console.log(this.store.selectSnapshot(LoginStateModel.loggedUserId));
    this.store.dispatch(new IsLoggedIn())
      .subscribe(value1 => {
        this.updateUserService.addUserLike(item.imageId, value1.Authentication.user.userId)
          .subscribe(value => console.log(value));
        this.store.dispatch(new UserDetailsActions.GetUserDetails(userId))
      });
  }
}

import {LoginStateModel} from "../app-state/states/login.state.model";
import {LoginComponent} from "../login/login.component";
import {AddTagsDialogComponent} from "../../private/add-tags-dialog/add-tags-dialog.component";


import {UserDetailsActions} from "../app-state/actions/user-details.action";
import {ImagesByUserIdState} from "../app-state/states/images-by-user-id.state";
import {ImageRowView} from "../domain/ImageRowView";
import {ImageRowMapper} from "../image-row-mapper";
import {UpdateUserService} from "../../serviceV2/update-user.service";
import {AuthenticationActions} from "../app-state/actions/authentication-action";
import IsLoggedIn = AuthenticationActions.IsLoggedIn;
import {HttpClient} from "@angular/common/http";
import * as FileSaver from "file-saver";
import {ImageDownloadService} from "../../serviceV2/image-download.service";
import {ChangeImageDetailsDialogComponent} from "../../private/change-image-details-dialog/change-image-details-dialog.component";
import {FileSaverService} from "ngx-filesaver";
