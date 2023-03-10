# git 다시 해보기

# 새 저장소 만들기

- git init

# 브런치는 저장소의 작업 공간

- master가 최종작업물 다른 브런치를 만들어서 여럿이서 작업을 하거나 혼자 작업할 때 작업의 내용을 나눠서 작업하고 최종 작업물로 병합한다.

- master(ver 0.1) =>dev=>dev=>dev=>master 병합 (ver 0.2)
- master=>dev1,dev2=>dev1,dev2=>dev1,dev2=>dev1 + dev2=>dev1 + master

# 브런치 목록 확인

-git branch: 로커루 저장소의 브런치 목록 확인
-git branch -a :원격 저장소와 로컬 저장소 브런치목록 확인

- 선택되어 있는 브런치는 \*글자가 초록색

# 브런치 생성

-git branch "생성할 브런치의 이름"

# 브런치 이동

- git checkout "이동할 브런치의 이름": 있는 브런치로 이동
- git switch "이동할 브런치의 이름"

# 브런치의 제거

- git branch -d "제거할 브런치의 이름"

# 브런치를 만들었으면 push를 해서 원격저장소에 브런치를 생성해주자.

# 저장소 병합
- git merge "병합할 브런치 이름"

# merge병합중 충돌이 난 파일을 보여주고 선택할 수 있게 해준다.