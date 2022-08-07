/* eslint-disable prettier/prettier */
/* eslint-disable no-shadow */
import SQLite from 'react-native-sqlite-storage';
SQLite.DEBUG(true);
SQLite.enablePromise(true);

const database_name = 'Pet.db';
const database_version = '1.0';
const database_displayname = 'Database Animalia';
const database_size = 2000000;

export default class PetDatabase {
  Conectar() {
    let db;
    return new Promise(resolve => {
      console.log('Checando a integridade do plugin ...');
      SQLite.echoTest()
        .then(() => {
          console.log('Integridade Ok ...');
          console.log('Abrindo Banco de Dados ...');
          SQLite.openDatabase(
            database_name,
            database_version,
            database_displayname,
            database_size,
          )
            .then(DB => {
              db = DB;
              console.log('Banco de dados Aberto');
              db.executeSql('SELECT 1 FROM Pet LIMIT 1')
                .then(() => {
                  console.log(
                    'O banco de dados está pronto ... Executando Consulta SQL ...',
                  );
                })
                .catch(error => {
                  console.log('Erro Recebido: ', error);
                  console.log(
                    'O Banco de dados não está pronto ... Criando Dados',
                  );
                  db.transaction(tx => {
                    tx.executeSql(
                      'CREATE TABLE IF NOT EXISTS Pet (id INTEGER PRIMARY KEY AUTOINCREMENT, nome varchar(255), raca VARCHAR(255), dataNascimento VARCHAR(10), dataAdocao VARCHAR(10), genero VARCHAR(10), foto MEDIUMBLOB)',
                    );
                  })
                    .then(() => {
                      console.log('Tabela criada com Sucesso');
                    })
                    .catch(error => {
                      console.log(error);
                      throw error;
                    });
                });
              resolve(db);
            })
            .catch(error => {
              console.log(error);
            });
        })
        .catch(error => {
          console.log('echoTest Falhou - plugin não funcional', error);
          throw error;
        });
    });
  }

  Desconectar(db) {
    if (db) {
      console.log('Fechando Banco de Dados');
      db.close()
        .then(status => {
          console.log('Banco de dados Desconectado!!');
        })
        .catch(error => {
          this.errorCB(error);
        });
    } else {
      console.log('A conexão com o banco não está aberta');
    }
  }

  Apagar() {
    return new Promise(resolve => {
      this.Conectar()
        .then(db => {
          db.transaction(tx => {
            tx.executeSql('DROP TABLE Pet', []);
          })
            .then(result => {
              this.Desconectar(db);
            })
            .catch(err => {
              console.log(err);
            });
        })
        .catch(err => {
          console.log(err);
        });
    });
  }

  Listar() {
    return new Promise(resolve => {
      const lista = [];
      this.Conectar()
        .then(db => {
          db.transaction(tx => {
            tx.executeSql('SELECT * FROM Pet', []).then(([tx, results]) => {
              console.log('Consulta completa');
              var len = results.rows.length;
              for (let i = 0; i < len; i++) {
                let row = results.rows.item(i);
                const {id, nome, raca, dataNascimento, dataAdocao, genero, foto} = row;
                lista.push({id, nome, raca, dataNascimento, dataAdocao, genero, foto});
                // console.log('lista------------------------', lista, '----------------------lista');
              }
              resolve(lista);
              return (lista);
            });
          })
            .then(result => {
              this.Desconectar(db);
            })
            .catch(err => {
              console.log(err);
            });
        })
        .catch(err => {
          console.log(err);
        });
    });
  }

  Inserir(pet) {
    return new Promise(resolve => {
      this.Conectar()
        .then(db => {
          db.transaction(tx => {
            tx.executeSql(
              'INSERT INTO Pet (nome, raca, dataNascimento, dataAdocao, genero, foto) VALUES (?, ?, ?, ?, ?, ?)',
              [pet.nome, pet.raca, pet.dataNascimento, pet.dataAdocao, pet.genero, pet.foto],
            ).then(([tx, results]) => {
              resolve(results);
            })
            .catch(err => {
              console.log(err);
            });
          })
            .then(result => {
              this.Desconectar(db);
            })
            .catch(err => {
              console.log(err);
            });
        })
        .catch(err => {
          console.log(err);
        });
    });
  }

  Atualizar(pet, id) {
    console.log('------------------ ESSA FUNÇÃO RECEBE O OBJETO:', pet);
    // console.log('------------------ id no db', pet.idPet);
    return new Promise(resolve => {
      this.Conectar()
        .then(db => {
          db.transaction(tx => {
            tx.executeSql('UPDATE Pet SET nome = ?, raca = ?, dataNascimento = ?, dataAdocao = ?, genero = ?, foto = ? WHERE id = ?', [
                pet.nome,
                pet.raca,
                pet.dataNascimento,
                pet.dataAdocao,
                pet.genero,
                pet.foto,
                id,
            ]).then(([tx, results]) => {
              resolve(results);
            });
          })
            .then(result => {
              this.Desconectar(db);
            })
            .catch(err => {
              console.log(err);
            });
        })
        .catch(err => {
          console.log(err);
        });
    });
  }

  Remover(id) {
    return new Promise(resolve => {
      this.Conectar()
        .then(db => {
          db.transaction(tx => {
            tx.executeSql('DELETE FROM Pet WHERE Id = ?', [id]).then(
              ([tx, results]) => {
                console.log(results);
                resolve(results);
              },
            );
          })
            .then(result => {
              this.Desconectar(db);
            })
            .catch(err => {
              console.log(err);
            });
        })
        .catch(err => {
          console.log(err);
        });
    });
  }
}
