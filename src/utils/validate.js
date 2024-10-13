

export const validateForm = (email, password, name)=>{

  const isName = /^[a-zA-Z ]{2,30}$/.test(name);
  const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password);

  if(!isName && !name)return 'Enter a valid Name';
  else if(!isEmail)return 'Enter a valid Email';
  else if(!isPassword)return 'Password must contain atleast 6 char, 1 uppercase, 1 special char, 1 number';

  return null

}