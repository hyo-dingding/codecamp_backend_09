interface IProfile {
    name: string;
    age: number;
    school: string;
    hobby?: string;
}

// 1. Partial 타입 (있어도 되고 없어도 되고)
type aaa = Partial<IProfile>;

// 2. Required 타입 (전부 필수)
type bbb = Required<IProfile>;

// 3. Pick 타입 (선택해서 사용하기)
type ccc = Pick<IProfile, "name" | "age">;

// 4. Omit 타입 (선택해서 빼기)
type ddd = Omit<IProfile, "school">;

// 5. Record 타입
type eee = "철수 " | "영희" | "훈이"; // Union 타입
let child: eee;
child = "철수";
type fff = Record<eee, IProfile>; // Record 타입

let mykey: keyof IProfile; // "name"|"age"|"school"|"hobby"|   // keyof
mykey = "hobby";

// ==========(type vd interface 차이)======================

// interface 선언병합  똑같은것을 또 만들수 있음
interface IProfile {
    candy: number;
}

let profile: Partial<IProfile> = {
    candy: 10, // 선언병합으로 추가됨
};
