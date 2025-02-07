import React, { useState, useEffect } from 'react';
import { db, auth } from '../../Firebase';  
import { collection, addDoc, getDocs, query, where, updateDoc, doc } from 'firebase/firestore';
import axios from 'axios';
import './PokeJuego.css'

const MAX_ATTEMPTS = 3; // Número máximo de intentos

const PokemonGame = () => {
  const [pokemon, setPokemon] = useState(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [rankings, setRankings] = useState([]);
  const [user, setUser] = useState(null);
  const [userRecord, setUserRecord] = useState(null);
  const [hints, setHints] = useState({});
  const [attemptsLeft, setAttemptsLeft] = useState(MAX_ATTEMPTS);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (loggedUser) => {
      setUser(loggedUser);
      if (loggedUser) {
        setGameOver(false);
        setAttemptsLeft(MAX_ATTEMPTS);
        await fetchUserRanking(loggedUser.email);
        fetchRandomPokemon();
      }
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (user) {
      fetchRankings();
    }
  }, [user]);

  const fetchRandomPokemon = async () => {
    const randomId = Math.floor(Math.random() * 898) + 1;
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
      setPokemon(response.data);
      setAttemptsLeft(MAX_ATTEMPTS);
      generateHints(response.data, 0);
    } catch (error) {
      console.error('Error al obtener el Pokémon:', error);
    }
  };

  const generateHints = async (pokemonData, failedAttempts) => {
    const name = pokemonData.name;
    const firstLetter = name[0].toUpperCase();
    const lastLetter = name[name.length - 1];
    const hiddenPart = '_'.repeat(name.length - 2);
    const nameHint = `${firstLetter}${hiddenPart}${lastLetter}`;
    const lengthHint = `El nombre tiene ${name.length} letras.`;
    const typeHint = `Tipo: ${pokemonData.types.map(t => t.type.name).join(', ')}`;

    let generationHint = '???';
    try {
      const speciesResponse = await axios.get(pokemonData.species.url);
      generationHint = `Generación: ${speciesResponse.data.generation.name.replace('generation-', ' ').toUpperCase()}`;
    } catch (error) {
      console.error('Error al obtener la generación del Pokémon:', error);
    }

    // Pistas progresivas basadas en intentos fallidos
    let hintList = [
      `Nombre parcial: ${nameHint}`,
      lengthHint,
    ];
    if (failedAttempts >= 1) hintList.push(typeHint);
    if (failedAttempts >= 2) hintList.push(generationHint);

    setHints({ hintList });
  };

  const fetchRankings = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'rankings'));
      const rankingsList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      rankingsList.sort((a, b) => b.score - a.score);
      setRankings(rankingsList);
    } catch (error) {
      console.error('Error al obtener rankings:', error);
    }
  };

  const fetchUserRanking = async (email) => {
    if (!email) return;
    try {
      const q = query(collection(db, 'rankings'), where('user', '==', email));
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        setUserRecord({ id: querySnapshot.docs[0].id, ...querySnapshot.docs[0].data() });
      } else {
        setUserRecord(null);
      }
    } catch (error) {
      console.error('Error al obtener el ranking del usuario:', error);
    }
  };

  const handleAnswer = () => {
    if (userAnswer.toLowerCase() === pokemon.name.toLowerCase()) {
      setScore(prevScore => prevScore + 1);
      fetchRandomPokemon();
    } else {
      if (attemptsLeft > 1) {
        setAttemptsLeft(prev => prev - 1);
        generateHints(pokemon, MAX_ATTEMPTS - attemptsLeft + 1);
      } else {
        handleGameOver();
      }
    }
    setUserAnswer('');
  };

  const handleGameOver = async () => {
    setGameOver(true);
    if (user) {
      await fetchUserRanking(user.email);
      if (userRecord && score > userRecord.score) {
        try {
          await updateDoc(doc(db, 'rankings', userRecord.id), { score });
        } catch (error) {
          console.error('Error al actualizar el ranking:', error);
        }
      } else if (!userRecord) {
        try {
          await addDoc(collection(db, 'rankings'), {
            user: user.email,
            score,
            date: new Date().toISOString(),
          });
        } catch (error) {
          console.error('Error al guardar el ranking:', error);
        }
      }
      fetchRankings();
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAnswer();
    }
  };

  if (!user) {
    return <p>Debes iniciar sesión para jugar.</p>;
  }

  return (
    <div>
      <h1>¡Adivina el Pokémon!</h1>
      {!gameOver && pokemon ? (
        <div>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <p><strong>Pistas:</strong></p>
          <ul>
            {hints.hintList && hints.hintList.map((hint, index) => (
              <li key={index}>{hint}</li>
            ))}
          </ul>
          <p>Intentos restantes: {attemptsLeft}</p>
          <input
            type="text"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <button onClick={handleAnswer}>Comprobar</button>
          <p>Tu puntuación: {score}</p>
          <button onClick={handleGameOver}>Terminar juego</button>
        </div>
      ) : gameOver ? (
        <div>
          <h2>Juego terminado</h2>
          <p>Tu puntuación: {score}</p>
        </div>
      ) : (
        <p>Cargando Pokémon...</p>
      )}
      <h3>Ranking de puntuaciones:</h3>
      <ul>
        {rankings.map((ranking, index) => (
          <li key={index}>
            {ranking.user}: {ranking.score} puntos - {new Date(ranking.date).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonGame;
