
const Pessoa = {
    Nome: "Warlison",
    idade: "21",
    Curso: "Engenharia de Software",
    Entreternimento: ["musica", "esporte", "comer", "dormir"],
    acao: function(){
        console.log(Pessoa.Entreternimento[1])
    }
};


// Pessoa.Entreternimento.push("k")

// Pessoa.acao()


//   function teste(valor1) {
//     console.log(valor1.name)
//     console.log(valor1.age)
//     console.log(valor1.id)
//     console.log(valor1.sex)

//   }

//   teste(array[0])


// const teste = (a) => console.log(a+10);

// teste(10);




// const idade = (an) => console.log(2023-an);

// idade(2002)


// let array = [
//     {
//       id: 1,
//       name: 'John',
//       age: 23,
//     },
//     {
//       id: 2,
//       name: 'Samuel',
//       age: 21,
//     },
//     {
//       id: 3,
//       name: 'marvin',
//       age: 26,
//     },
//     {
//       id: 4,
//       name: 'james',
//       age: 28,
//     },
//   ];


//   const resultado = array.map((resposta) => {
//     if (resposta.name == 'John'){
//     resposta.age += 10
//     console.log(resposta)
//     }

//     // console.log(resposta);
//     return '';
//   })

// const filtro = array.filter((resposta) => {
//     return resposta.id === 1;
// });

// console.log(filtro)

// const someFuncao = array.some((resposta) =>{
//     resposta.id == 3;
// });

// console.log(someFuncao)
// let funcionario = [
//   {
//     nome: 'Euclides',
//     idade: 21,
//     cargo: 'Analista de sistemas',
//     tecnoglogia: 'Node',
//   },
//   {
//     nome: 'Linton',
//     idade: 30,
//     cargo: 'Analista de sistemas',
//     tecnoglogia: 'Tudo',
//   },
// ];

// console.log(somefuncao);

let funcionario = [
  {
    nome: "Euclides",
    idade: "21",
    cargo: "Analista de Sistemas",
    tecnologia: ["Node"],
  },
  {
    nome: "Linton",
    idade: "30",
    cargo: "Analista de Sistemas",
    tecnologia:["tudo"],
  }
];

// console.log(funcionario);
// console.log("="*10);


funcionario.push({
  nome: "Richard",
  idade: 27,
  cargo: "Aluno",
  tecnologia: ["Android"]
 });



// for (let i = 0; i < funcionario.length; i++){
//   if (funcionario[i].nome == "Richard"){
//     console.log(funcionario[i])
//   }
// };




// for (let i = 0; i < funcionario.length; i++){
//   if (funcionario[i] == funcionario[0]){
//     funcionario[i].tecnologia = [funcionario[i].tecnologia];
//     funcionario[i].tecnologia.push("react");
//     console.log(funcionario[i].tecnologia );

//   }
// };

// console.log(funcionario);

for (let i = 0; i < funcionario.length; i++){
  if (funcionario[i] == funcionario[0]){
  funcionario[i].tecnologia.push("react");
  console.log(funcionario[i].tecnologia);
}
}

