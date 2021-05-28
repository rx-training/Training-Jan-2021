import * as tp from "./PracticeGeneric";

let output3 = tp.display<number>(100);

console.log(output3);

let st = new tp.StudentInfo<string, string>();
st.setValue('101','dhoni');
st.display();