import { Demo, Demo2 } from './modules1';

var temp1 = new Demo<number, string>(1, "milit");
temp1.display();

var demo2 = new Demo2(1,"s");
demo2.display();