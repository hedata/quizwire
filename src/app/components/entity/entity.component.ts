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
  public entityId: String = ''; 
  public entityDetails: any;
  public lang: String = 'en';

  @Input() activeComponentConfig: any;
  isActive: boolean = false;

  ngOnChanges(changes: SimpleChanges) {
    if (this.activeComponentConfig.name === 'entity') {
      console.log('[SettingEntittyActive]');
      this.isActive = true;
      this.entityId = this.activeComponentConfig.params[0];
      if(this.entityId) {
          this.getDetails(this.entityId);
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

  async getDetails(id: String) {
    console.log('[Entity] getting Details for: ', id);
    const response = await this.dataService.getEntityDetails({
      id: id
    });
    this.entityDetails = response;
    console.log('[Entity] Response: ', response);
  }
}
