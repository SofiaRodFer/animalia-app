/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {launchImageLibrary} from 'react-native-image-picker';

import Pet from '../../models/pet';
import PetDatabase from '../../database/petDatabase';

import formStyles from '../../styles/pets/formStyles';

const Form = (props) => {
  const funcao = props.funcao.toLowerCase();
  const id = funcao === 'atualizar' ? props.pet.id : null;
  const [nome, setNome] = useState(funcao === 'cadastrar' ? '' : props.pet.nome);
  const [raca, setRaca] = useState(funcao === 'cadastrar' ? '' : props.pet.raca);
  const [dataNascimento, setDataNascimento] = useState(funcao === 'cadastrar' ? '00/00/0000' : props.pet.dataNascimento);
  const [dataAdocao, setDataAdocao] = useState(funcao === 'cadastrar' ? '00/00/0000' : props.pet.dataAdocao);
  const [genero, setGenero] = useState(funcao === 'cadastrar' ? '' : props.pet.genero);
  const [foto, setFoto] = useState(funcao === 'cadastrar' ? '' : props.pet.foto);
  const navigation = useNavigation();

  const dataDeHoje = () => {
    const date = new Date();
    const dataHoje = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    return dataHoje;
  };

  const textoBotaoFoto = () => {
    if (funcao === 'cadastrar' && foto !== '') {
      return 'Foto Selecionada';
    } else if (funcao === 'atualizar' && foto !== '') {
      return 'Foto Selecionada';
    } else {
      return 'Foto...';
    }
  };

  const Cadastrar = () => {
      const dataHoje = dataDeHoje();
      const petNovo = new Pet(
        nome === '' ? 'Pet' : nome,
        raca === '' ? 'Vira-Lata' : raca,
        dataNascimento === '00/00/0000' ? dataHoje : dataNascimento,
        dataAdocao  === '00/00/0000' ? dataHoje : dataAdocao,
        genero === '' ? 'Masculino' : genero,
        foto === '' ? 'padrao.png' : foto,
      );
      const banco = new PetDatabase();
      banco.Inserir(petNovo);
  };

  const Atualizar = (pet) => {
    const dataHoje = dataDeHoje();
    const petAtualizado = new Pet(
      nome === '' ? 'Pet' : pet.nome,
      raca === '' ? 'Vira-Lata' : pet.raca,
      dataNascimento === '00/00/0000' ? dataHoje : pet.dataNascimento,
      dataAdocao  === '00/00/0000' ? dataHoje : pet.dataAdocao,
      genero === '' ? 'Masculino' : pet.genero,
      foto,
    );
    const banco = new PetDatabase();
    banco.Atualizar(petAtualizado, id);
  };

  return (
      <View style={formStyles.container}>
        <View style={formStyles.inputContainer}>
          <TextInput
            placeholder="Nome..."
            style={formStyles.input}
            defaultValue={id !== null ? props.pet.nome : ''}
            onChangeText={valorDigitado => {
              setNome(valorDigitado);
            }}
          />
          <TextInput
            placeholder="Raça..."
            style={formStyles.input}
            defaultValue={id !== null ? props.pet.raca : ''}
            onChangeText={valorDigitado => {
              setRaca(valorDigitado);
            }}
          />
          <TextInput
            placeholder="Data de nascimento (dd/mm/aaaa)..."
            style={formStyles.input}
            defaultValue={id !== null ? props.pet.dataNascimento : ''}
            onChangeText={valorDigitado => {
              setDataNascimento(valorDigitado);
            }}
          />
          <TextInput
            placeholder="Data de adoção (dd/mm/aaaa)..."
            style={formStyles.input}
            defaultValue={id !== null ? props.pet.dataAdocao : ''}
            onChangeText={valorDigitado => {
              setDataAdocao(valorDigitado);
            }}
          />
          <TextInput
            placeholder="Gênero..."
            style={formStyles.input}
            defaultValue={id !== null ? props.pet.genero : ''}
            onChangeText={valorDigitado => {
              setGenero(valorDigitado);
            }}
          />
          <TouchableOpacity
            style={[formStyles.input, formStyles.inputFoto, textoBotaoFoto() === 'Foto Selecionada' ? {color: 'black'} : {color: '#988f8a'}]}
            onPress={ async () => {
              let fotoUpload = await launchImageLibrary({mediaType: 'photo', maxWidth: 120, maxHeight: 120, includeBase64: true});

              // console.log(`${fotoUpload.assets[0].base64}`);

              setFoto(`data:${fotoUpload.assets[0].type};base64,${fotoUpload.assets[0].base64}`);
            }}
          >
            <Text style={formStyles.fotoText}>{textoBotaoFoto()}</Text>
          </TouchableOpacity>
          {/* <TextInput
            placeholder="Foto..."
            style={formStyles.input}
            defaultValue={id !== null ? props.pet.foto : ''}
            onChangeText={valorDigitado => {
              setFoto(valorDigitado);
            }}
          /> */}
        </View>
        <View style={formStyles.botaoContainer}>
          <TouchableOpacity
          style={formStyles.botao}
          onPress={ () => {
            if (funcao === 'cadastrar') {
              Cadastrar();
            } else {
              Atualizar({nome: nome, raca: raca, dataNascimento: dataNascimento, dataAdocao: dataAdocao, genero: genero, foto: foto});
            }
            navigation.navigate('HomeScreen');
          }}
          >
            <Text style={formStyles.textoBotao}>{props.textoBotao}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
};

export default Form;
