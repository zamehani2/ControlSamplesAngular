import { Component, OnInit } from '@angular/core';

import { Menu } from '../classes/menu';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {
  menus: Menu[];

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.getMenus();
  }

  getMenus(): void {
    this.menuService.getMenus()
    .subscribe(menus => this.menus = menus);
  }

  /*add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.menuService.addMenu({ name } as Menu)
      .subscribe(menu => {
        this.menus.push(menu);
      });
  }*/

  delete(menu: Menu): void {
    this.menus = this.menus.filter(h => h !== menu);
    this.menuService.deleteMenu(menu).subscribe();
  }

  /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
  menuMotion(): void {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
  }

}
