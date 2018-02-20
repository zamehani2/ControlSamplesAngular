import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Menu } from '../classes/menu';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const menus = [{
        "id":1,                      
        "text":"TextBox",
        "url": "",
        "imageUrl":"",
        "parentid":0,
        "submenus": [
             {
                 "id":2,                      
                 "text":"Simple Text Box",
                 "url": "/simpletextbox",
                 "imageUrl":"",
                 "parentid":1,
                 "submenus": []
             },
             {
                 "id":3,                      
                 "text":"Password Box",
                 "url": "/passwordbox",
                 "imageUrl":"",
                 "parentid":1,
                 "submenus": []
             },
             {
                 "id":4,                      
                 "text":"Only Number Box",
                 "url": "/onlynumbers",
                 "imageUrl":"",
                 "parentid":1,
                 "submenus": []
             },
             {
                 "id":5,                      
                 "text":"Only String Box",
                 "url": "",
                 "imageUrl":"",
                 "parentid":1,
                 "submenus": []
             },                
             {
                 "id":6,                      
                 "text":"Email Box",
                 "url": "",
                 "imageUrl":"",
                 "parentid":1,
                 "submenus": []
             }
         ]
     }
  ];
    return {menus};
  }
}