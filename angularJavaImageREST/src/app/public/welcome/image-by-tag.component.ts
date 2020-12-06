import { Component, OnInit } from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {ImagesByTagState} from "../../shared/app-state/states/images-by-tag-state";
import {Observable} from "rxjs";
import {ImageModelList} from "../../shared/domain/imageModel/image-model-list";
import {ImageRequestService} from "../../serviceV2/image-request.service";
import {ImageModel} from "../../shared/domain/imageModel/image.model";
import {DisplayImagesAction} from "../../shared/app-state/actions/display-images.action";
import {environment} from "../../../environments/environment";
import {DeviceDetectorService} from "ngx-device-detector";

@Component({
  selector: 'app-welcome',
  templateUrl: './image-by-tag.component.html',
  styleUrls: ['./image-by-tag.component.scss']
})
export class ImageByTagComponent implements OnInit {
  foo: string = "IHUTiYJ6Wdk.jpg";
  @Select(ImagesByTagState.getData) $imagesByTags: Observable<ImageModel[]>;
  constructor(private store: Store, private service: ImageRequestService) { }

  ngOnInit(): void {

  }

}
