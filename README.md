# AIVIS

## 기술 스택

- react (v.18)
- typescript
- react query


## 실행 방법

1. 설치
```bash
$ yarn
```
2. 실행
```bash
$ yarn start
```

### 화면
- 로그인: [http://localhost:3000/login](http://localhost:3000/login)
- 프로젝트 리스트: [http://localhost:3000/project](http://localhost:3000/project)
- 프로젝트 상세: [http://localhost:3000/project/:projectId](http://localhost:3000/:projectId)

## 구현 내용
1)  프로젝트 리스트
	- name, number of images, created 컬럼 표시
    - loading 표시
2) sorting
	- name, number of images, created 각각 asc, desc 정렬
3) pagination
	- pagination 정상 동작
	- 하단 버튼으로 pageSize(10, 15, 20) 선택 가능
    - pageSize 조정 시 pageIndex 1로 초기화
    - total page count 반영
4) 각 행의 세부 정보
	- 각 행에 첫 열에 open/close 버튼 구현
    - open 시 id, annotations, slides, ontologyName 을 포함한 정보 표시
    - close 시 정보 사라짐
5) 신규 프로젝트 생성
	- 우측 상단의 프로젝트 생성 버튼 구현
    - 프로젝트 생성 요청 구현
    - 데이터 동기화 및 loading 표시
6) 프로젝트 상세
	- project name 클릭 시 /project/[projectId] 로 라우팅
    - 간단하게 projectId가 뜨는 페이지 구현

## 참고 사항
- `구현내용 - 3번` : react-pagination 라이브러리를 활용했습니다.
- `구현내용 - 4번` : annotations, slides에 대한 정보는 response에 있는 annotation numbers, slides number 로 대체했습니다.
- `구현내용 - 5번` : 프로젝트 생성 로직을 구현했으나, api 연결 후 정상 동작 테스트를 하지 못했습니다.
- `구현내용 - 5번` : 시간 관계상 Modal이 아닌 prompt로 간단하게 구현했습니다.
- `추가 구현` : login 페이지 및 login/logout 로직을 구현했습니다.
- 테스트 시 확인할 api url 은 constants.ts 의 `BASE_URL` 입니다.
- 디자인 작업은 거의 하지 않았습니다.