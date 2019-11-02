import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { finalize, debounce } from 'rxjs/operators';

import { environment } from '@env/environment';
import { Logger, I18nService, AuthenticationService } from '@app/core';
import { DataService } from '@app/services/data.service';

const log = new Logger('Entity');

@Component({
  selector: 'entity',
  templateUrl: './entity.component.html',
  styleUrls: ['./entity.component.scss']
})
export class EntityComponent implements OnInit {
  version: string = environment.version;
  public loading:boolean=true;
  public selectedClaim: any ;
  public entityId: String = '';
  public entityDetails: { label: string, claims: Array<any>};
  public language: String = 'en';

  @Input() activeComponentConfig: any;
  isActive: boolean = false;

  ngOnChanges(changes: SimpleChanges) {
    if (this.activeComponentConfig.name === 'entity') {
      console.log('[SettingEntittyActive]');
      this.isActive = true;
      this.entityId = this.activeComponentConfig.params[0];
      if(this.entityId) {
          this.setupEntityDetails(this.entityId);
      }
    } else {
      this.isActive = false;
    }
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private i18nService: I18nService,
    private authenticationService: AuthenticationService,
    private dataService: DataService
  ) {}

  ngOnInit() {
    console.log('[Entity] Init');
  }
  async setupEntityDetails(id:String) {
    this.loading=true;
    await this.getDetails(id);
    if(this.entityDetails && this.entityDetails.claims && this.entityDetails.claims.length>0) {
      this.selectedClaim = this.entityDetails.claims[0];
    } else {
      this.selectedClaim = undefined;
    }
    //select
    this.loading=false;
  }

  async getDetails(id: String) {
    console.log('[Entity] getting Details for: ', id);
    const response = await this.dataService.getEntityDetails({
      id: id
    });
    this.entityDetails = response;
    console.log('[Entity] Response: ', response);
  }
  prevClaim() {
    const currentClaimIndex = this.entityDetails.claims.findIndex(el => el.property===this.selectedClaim.property);
    if(currentClaimIndex-1 > 0) {
      this.selectedClaim = this.entityDetails.claims[currentClaimIndex-1];
    } else {
      //last one
      this.selectedClaim = this.entityDetails.claims[this.entityDetails.claims.length-1];
    }
    console.log("[Claimchange To]",this.selectedClaim,currentClaimIndex)
  }
  nextClaim() {
    const currentClaimIndex = this.entityDetails.claims.findIndex(el =>el.property===this.selectedClaim.property);
    if(currentClaimIndex+1 > this.entityDetails.claims.length-1) {
      //start again
      this.selectedClaim = this.entityDetails.claims[0];
    } else {
      this.selectedClaim = this.entityDetails.claims[currentClaimIndex+1];
    }
    console.log("[Claimchange To]",this.selectedClaim,currentClaimIndex)
  }
  detailsForEntity(entity: any) {
    console.log('[GOTO Entity]', entity);
    this.router.navigate(['/entity/' + entity.id], { replaceUrl: true });
  }
}
