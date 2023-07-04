import './App.css';
import UserSimpson from './components/UserSimpson';
import UserRickMorty from './components/UserRickMorty';

function App() {
  return (
      <div className={'container'}>
        <h2>Сім'я Cімпсонів</h2>
        <div className={'user-wrap'}>
          <UserSimpson
              name={'Bart'}
              surname={'Simpson'}
              age={'10'}
              gender={'male'}
              img={'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'}
          />
          <UserSimpson
              name={'Homer'}
              surname={'Simpson'}
              age={'40'}
              gender={'male'}
              img={'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'}
          />
          <UserSimpson
              name={'Marge'}
              surname={'Simpson'}
              age={'38'}
              gender={'female'}
              img={'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'}
          />
          <UserSimpson
              name={'Lisa'}
              surname={'Simpson'}
              age={'9'}
              gender={'female'}
              img={'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'}
          />
          <UserSimpson
              name={'Maggie'}
              surname={'Simpson'}
              age={'1'}
              gender={'female'}
              img={'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'}
          />
        </div>

          <h2>Персонажі з The Rick and Morty</h2>
          <div className={'user-wrap user-wrap_3 user-wrap_acid'}>
              <UserRickMorty
                  id={'1'}
                  name={'Rick Sanchez'}
                  status={'Alive'}
                  species={'Human'}
                  gender={'Male'}
                  image={'https://rickandmortyapi.com/api/character/avatar/1.jpeg'}
              />
              <UserRickMorty
                  id={'2'}
                  name={'Morty Smith'}
                  status={'Alive'}
                  species={'Human'}
                  gender={'Male'}
                  image={'https://rickandmortyapi.com/api/character/avatar/2.jpeg'}
              />
              <UserRickMorty
                  id={'3'}
                  name={'Summer Smith'}
                  status={'Alive'}
                  species={'Human'}
                  gender={'Female'}
                  image={'https://rickandmortyapi.com/api/character/avatar/3.jpeg'}
              />
              <UserRickMorty
                  id={'4'}
                  name={'Beth Smith'}
                  status={'Alive'}
                  species={'Human'}
                  gender={'Female'}
                  image={'https://rickandmortyapi.com/api/character/avatar/4.jpeg'}
              />
              <UserRickMorty
                  id={'5'}
                  name={'Jerry Smith'}
                  status={'Alive'}
                  species={'Human'}
                  gender={'Male'}
                  image={'https://rickandmortyapi.com/api/character/avatar/5.jpeg'}
              />
              <UserRickMorty
                  id={'6'}
                  name={'Abadango Cluster Princess'}
                  status={'Alive'}
                  species={'Alien'}
                  gender={'Female'}
                  image={'https://rickandmortyapi.com/api/character/avatar/6.jpeg'}
              />
          </div>
      </div>
  );
}




export default App;
