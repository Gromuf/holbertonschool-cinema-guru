import React, { useState } from 'react';
import './App.css';
import Input from './components/general/Input';
import SelectInput from './components/general/SelectInput';
import Button from './components/general/Button';
import SearchBar from './components/general/SearchBar';
import { faEnvelope, faPlay } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [email, setEmail] = useState("");
  const [genre, setGenre] = useState("action");
  const [search, setSearch] = useState("");

  const genres = [
    { value: 'action', label: 'Action' },
    { value: 'comedy', label: 'Comedy' },
    { value: 'drama', label: 'Drama' }
  ];

  return (
    <div className="App" style={{ padding: '50px', backgroundColor: '#080202', minHeight: '100vh' }}>
      <h1 style={{ color: 'white', marginBottom: '30px' }}>Test des Composants General</h1>
      
      <div style={{ maxWidth: '400px' }}>
        {/* Test SearchBar */}
        <SearchBar title={search} setTitle={setSearch} />
        <p style={{ color: 'gray', marginBottom: '20px' }}>Recherche : {search}</p>

        {/* Test Input avec Icône */}
        <Input 
          label="Email Address"
          type="email"
          value={email}
          setValue={setEmail}
          icon={faEnvelope}
          inputAttributes={{ placeholder: 'Enter your email' }}
        />

        {/* Test SelectInput */}
        <SelectInput 
          label="Favorite Genre"
          options={genres}
          value={genre}
          setValue={setGenre}
        />

        {/* Test Button */}
        <Button 
          label="Watch Now"
          icon={faPlay}
          onClick={() => alert('Cliqué !')}
        />
      </div>
    </div>
  );
}

export default App;