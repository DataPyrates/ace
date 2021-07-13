import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { menuItems } from '../assets/data/menu-items';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  private menu = menuItems;
  department: string;
  branch: string;
  constructor(private route: Router) {
  }

  ngOnInit(){
    this.department = localStorage.getItem('department');
    console.log(this.department);
  
  }
  get_department(event) {
    console.log(event.target.value);
    localStorage.setItem('department', event.target.value);
    var department_master = JSON.parse(localStorage.getItem('department_master'));
    for(let i=0; i<department_master.length; i++){
    if(department_master[i]['name']==event.target.value){
      localStorage.setItem('department_id',department_master[i]['id']);
    }
    }
  }
}
