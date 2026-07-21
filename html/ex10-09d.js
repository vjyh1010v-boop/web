/* objec, 객체 다루기 */

const user = { name: "홍길동", age: 10 };
// 객체의 키로 값을 읽는 법 - R
console.log(user.name);
console.log(user["name"]);
// 객체를 추가하는 법 - C
const 변수 = "address";
user.gender = "male";
user[변수] = "대한민국";
console.log(user);
// 객체의 키값쌍을 수정하는 법 - U
user[변수] = "대한민국 부산광역시";
// 객체의 요소를 수정하는 법 - D
delete user.gender;
delete user[변수];
delete user["age"];
console.log(user);

/* Tip */
const ok = "학교";
const test = { ok }; // {ok : ok}
console.log(test);

const obj = { t1: 11, t2: 22, t3: 33, t4: 44 };
const updated = { ...obj, t4: 44 };
console.log(updated);
