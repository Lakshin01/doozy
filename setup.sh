echo "Please add serverdb file before proceeding"

npm i

cd server
npm i
npm audit fix
cd ..

cd client
npm i
npm audit fix

cd ..


echo "installation successful."

npm run dev