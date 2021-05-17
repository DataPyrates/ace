import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from './data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  pages:any;
  showLevel1 = null;
  showLevel2 = null;
  constructor(private route: Router,public dataService: DataServiceService) {
    this.dataService.getMenus()
    .subscribe((response)=> {
        this.pages = response;
        console.log(this.pages);
    });
  }

  toggleLevel1(idx) {
    if (this.isLevel1Shown(idx)) {
      this.showLevel1 = null;
    } else {
      this.showLevel1 = idx;
    }
  };

  isLevel1Shown(idx) {
    return this.showLevel1 === idx;
  };
  
  isLevel2Shown(idx) {
    return this.showLevel2 === idx;
  };
  
  toggleLevel2(idx) {
    if (this.isLevel2Shown(idx)) {
      this.showLevel1 = null;
      this.showLevel2 = null;
    } else {
      this.showLevel1 = idx;
      this.showLevel2 = idx;
    }
  };

  logout(){
    localStorage.clear();
    this.route.navigate(['/login']);
  }
}
