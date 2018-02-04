import {LikesComponent} from './likes.component';

let component = new LikesComponent(10,true);
component.onClick();

console.log(`LikesCount: ${component.likesCount}, isSelected: ${component.isSelected}`);
