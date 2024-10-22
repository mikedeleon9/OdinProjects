const lowerBarList = document.querySelector('.lower-bar-list');

const programmingLanguageList = [
  'HTML', 'CSS', 'JAVASCRIPT', 'SQL', 'PYTHON', 'JAVA', 'PHP', 'HOW TO', 'W3.CSS', 'C', 'C++', 'C#', 'BOOTSTRAP', 'REACT', 'MYSQL', 'JQUERY', 'EXCEL', 'XML', 'DJANGO', 'NUMPY', 'PANDAS', 'NODEJS', 'R', 'TYPESCRIPT'
]

programmingLanguageList.forEach(word => {
  const programLanguage = document.createElement('li');
  programLanguage.textContent = word;
  lowerBarList.appendChild(programLanguage)
})