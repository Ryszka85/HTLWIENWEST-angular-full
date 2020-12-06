import {Action, Selector, State, StateContext} from "@ngxs/store";
import {CroppedDownloadRequest} from "../../domain/http/req/CroppedDownloadRequest";
import {Injectable} from "@angular/core";
import {ImageDownloadService} from "../../../serviceV2/image-download.service";
import {SetCroppedOffsetValues} from "../actions/image.action";
import {Observable, of} from "rxjs";
import {ImageRequestService} from "../../../serviceV2/image-request.service";
import {flatMap, map, mergeMap, switchMap, tap} from "rxjs/operators";

@State<CroppedDownloadRequest>({
  name: 'prepareForCroppedDownloadRequest'
})
@Injectable()
export class PrepareCroppedForDownloadState {
  constructor(private downloadService: ImageDownloadService,
              private imgReqService: ImageRequestService) {
  }

  @Selector()
  public static getCroppedValues(state: CroppedDownloadRequest): CroppedDownloadRequest {
    return state;
  }


  @Action(SetCroppedOffsetValues)
  public setCroppedOffsetValues(ctx: StateContext<CroppedDownloadRequest>,
                                action: SetCroppedOffsetValues): Observable<CroppedDownloadRequest> {
    const subImageWidth = action.subImageWidth;
    const subImageHeight = action.subImageHeight;

    let possibleResolutions: Array<string> = [];


    // put cropped image resolution into the resolutionList
    possibleResolutions.push(subImageWidth.toFixed(0) + " x " + subImageHeight.toFixed(0))

    // get possible app resolution array from endpoint
    return this.imgReqService
      .getResolutions()
      .pipe(switchMap(response => {
        let state = ctx.getState();
        const ratio = subImageWidth / subImageHeight;

        // check if querformat or hochformat
        if (subImageWidth > subImageHeight) {
          response.widthList
            .forEach(widthResolution => {
              if (subImageWidth > widthResolution) {
                const height = widthResolution / ratio;
                possibleResolutions.push(widthResolution + " x " + height.toFixed(0));
              }
            })

          // only take lower resolutions from response array
        } else if (subImageHeight > subImageWidth) {
          response.heightList
            .forEach(heightResolution => {
              if (subImageHeight > heightResolution) {
                const width = heightResolution * ratio;
                possibleResolutions.push(width.toFixed(0) + " x " + heightResolution.toFixed(0));
              }
            })

        }
        ctx.patchState({
          ...state,
          offsetX: action.offsetX,
          offsetY: action.offsetY,
          subImageWidth: subImageWidth,
          subImageHeight: subImageHeight,
          possibleResolutions: possibleResolutions
        })
        return of(ctx.getState());
      }));
  }
}


export interface ResolutionsResponse {
  widthList: Array<number>;
  heightList: Array<number>;
}
