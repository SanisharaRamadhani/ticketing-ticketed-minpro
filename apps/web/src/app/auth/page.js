'use client';
import axios from 'axios';
import { useState } from 'react';

const register = () => {
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:8000/auth/register', {
        name: name,
        code: code,
      });

      if (response.status === 201) {
        console.log(succses);
      } else {
        console.log(gagal);
      }
    } catch (error) {}
  };
  console.log;

  return (
    <div>
      <label>name</label>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="name"
        autoComplete="off"
        spellCheck="false"
        aria-invalid="false"
      />

      <label>code</label>
      <input
        value={code}
        onChange={(e) => setCode(e.target.value)}
        type="text"
        placeholder="name"
        autoComplete="off"
        spellCheck="false"
        aria-invalid="false"
      />

      <button onClick={handleSubmit} type="button" className=" bg-slate-500">
        submit
      </button>
    </div>
  );
};

export default register;
