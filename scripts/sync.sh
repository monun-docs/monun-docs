git checkout main
git pull origin development --rebase
git push origin main

git checkout production
git pull origin development --rebase
git push origin production

git checkout development
