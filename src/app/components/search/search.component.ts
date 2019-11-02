import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { finalize, debounce } from 'rxjs/operators';

import { environment } from '@env/environment';
import { Logger, I18nService, AuthenticationService } from '@app/core';
import { DataService } from '@app/services/data.service';

const log = new Logger('Login');

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  version: string = environment.version;
  public searchQuery: String = '';
  public searchResults: any;

  @Input() activeComponentConfig: any;
  public isActive: boolean;

  ngOnChanges(changes: SimpleChanges) {
    if (this.activeComponentConfig.name === 'search') {
      console.log('[SettingSearchActive]');
      this.isActive = true;
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
    ) {}

  ngOnInit() {
    console.log('[Search] Init');
  }
  detailsForEntity(entity: any) {
    console.log('[GOTO Entity]', entity);
    this.router.navigate(['/entity/' + entity.id], { replaceUrl: true });
  }
}
