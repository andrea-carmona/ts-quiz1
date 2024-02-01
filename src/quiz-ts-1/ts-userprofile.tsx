import React from 'react';


interface UserProfileProps {
  name: string;
  age: number;
  hobbies: string[];
}

function UserProfile({ name, age, hobbies }: UserProfileProps) {
  return (
    <div>
      <h2>Perfil de Usuario</h2>
      <p>Nombre: {name}</p>
      <p>Edad: {age} años</p>
      <h3>Pasatiempos</h3>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserProfile;




