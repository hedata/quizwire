import { Component, OnInit, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { finalize, debounce } from 'rxjs/operators';

import { environment } from '@env/environment';
import { Logger, I18nService, AuthenticationService } from '@app/core';
import { DataService } from '@app/services/data.service';

const log = new Logger('Login');

@Component({
  selector: 'searchfield',
  templateUrl: './searchfield.component.html',
  styleUrls: ['./searchfield.component.scss']
})
export class SearchFieldComponent implements OnInit {
  public searchQuery: String = '';
  public searchResults: any;

  @Output() searchResultClicked = new EventEmitter();

  constructor(
    private i18nService: I18nService,
      private dataService: DataService
  ) {}

  ngOnInit() {
    console.log('[SearchField] Init');
  }

  async searchForQuery(searchQuery: String) {
    console.log('[SearchField] searching for: ', searchQuery);
    const response = await this.dataService.searchWikiData({
      searchQuery: searchQuery
    });
    this.searchResults = response.search;
    console.log('[SearchField] Response: ', response);
  }
  searchResultChosen(entity: any) {
    console.log('[SearchField] - emit clicked', entity);
    this.searchResultClicked.emit(entity);
  }
}
