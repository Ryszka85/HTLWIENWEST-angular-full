import {Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import {BehaviorSubject, Observable, of, Subject} from "rxjs";
import {TagModel} from "../../shared/domain/tagModel/tag-model";
import {Select, Store} from "@ngxs/store";
import {debounceTime, filter, map, mergeMap, switchMap, tap} from "rxjs/operators";
import {QueryTagAction} from "../../shared/app-state/actions/query-tag-action";
import {SearchByTagState} from "../../shared/app-state/states/search-by-tag.state";
import {TagQueryList} from "../../shared/domain/tagModel/tag-query-list";
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import {FormControl} from "@angular/forms";
import {MatChipInputEvent} from "@angular/material/chips";
import {MatAutocomplete, MatAutocompleteSelectedEvent} from "@angular/material/autocomplete";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ImageModel} from "../../shared/domain/imageModel/image.model";
import {SelectImageState} from "../../shared/app-state/states/select-image.state";
import {ImageRequestService} from "../../serviceV2/image-request.service";
import {LoggedUserDetailsState} from "../../shared/app-state/states/logged-user-details.state";
import {Navigate} from "@ngxs/router-plugin";
import {AuthenticationActions} from "../../shared/app-state/actions/authentication-action";
import {ImagesByUserIDAction} from "../../shared/app-state/actions/image.action";
import {LoginStateModel} from "../../shared/app-state/states/login.state.model";
import {UserDetailsActions} from "../../shared/app-state/actions/user-details.action";

@Component({
  selector: 'app-add-tags-dialog',
  templateUrl: './add-tags-dialog.component.html',
  styleUrls: ['./add-tags-dialog.component.scss']
})
export class AddTagsDialogComponent implements OnInit {
  searchTerm$ = new Subject<string>();
  tagList: TagModel[];
  addChip: TagModel[] = [];

  @Select(SearchByTagState) tags$: Observable<TagQueryList>;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  tagCtrl = new FormControl();
  selectedImage: string;

  @ViewChild('tagInput') tagInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  constructor(private store: Store,
              private imageService: ImageRequestService,
              @Inject(MAT_DIALOG_DATA) public data: ImageModel,
              private dialogRef: MatDialogRef<AddTagsDialogComponent>) {
  }

  ngOnInit(): void {

    this.searchTerm$
      .pipe(debounceTime(1000))
      .subscribe(value => {
        console.log(value)
        this.store.dispatch(
          new QueryTagAction(new BehaviorSubject(value))
        )
      });
    this.tags$.subscribe(value => this.tagList = value.result)
    this.selectedImage = this.store.selectSnapshot(SelectImageState.getSelectedImageId);
  }

  search(value: string) {

  }

  remove(tag: TagModel) {
    const index = this.addChip
      .findIndex(tagModel => tagModel.tag === tag.tag);
    if (index >= 0)
      this.addChip.splice(index, 1);

  }

  add($event: MatChipInputEvent) {
    const input = $event.input;
    const value = $event.value;
    if ((value || '').trim()) {
      const selectedTag = this.store
        .selectSnapshot(SearchByTagState.getFetchedTagList)
        .find(tag => tag.tag === value);
      if (selectedTag) this.addChip.push(selectedTag)
    }
    if (input) {
      input.value = '';
    }
    this.tagCtrl.setValue(null)
    // this.tagList.push(value);
  }

  selected($event: MatAutocompleteSelectedEvent): void {
    const selectedTag = this.store
      .selectSnapshot(SearchByTagState.getFetchedTagList)
      .find(tag => tag.tag === $event.option.viewValue);
    if (selectedTag) this.addChip.push(selectedTag)
    this.tagInput.nativeElement.value = '';
    this.tagCtrl.setValue(null);
    console.log("SEAS?");
  }

  saveTags(): void {
    const selectedImage: string = this.store.selectSnapshot(SelectImageState.getSelectedImageId);
    const userId =
      this.store.selectSnapshot(LoginStateModel.loggedUserId);
    this.imageService.setTagToImage({
        userId: userId,
        imageId: selectedImage,
        tags: this.addChip
      }
    ).subscribe(value => {
      // this.store.dispatch(new Navigate(['profile', {userId: userId}]))
      this.store.dispatch(new UserDetailsActions.GetUserDetails(userId));
      this.dialogRef.close();
      // this.store
      //   .dispatch(new ImagesByUserIDAction(userId))
      //   .subscribe(value1 => {
      //     this.store.dispatch(new Navigate(['profile', {userId: userId}]))
      //     this.dialogRef.close();
      //   })
    })
    this.addChip = [];
    this.tagCtrl.setValue(null);
  }
}
