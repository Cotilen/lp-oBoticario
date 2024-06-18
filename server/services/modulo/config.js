const ERROR_REQUIRED_DATA = { status: 400, message: 'Existem dados obrigatórios que não foram preenchidos.' }
const ERROR_INTERNAL_SERVER = { status: 500, message: 'Erro interno no servidor de banco de dados' }
const ERROR_REQUIRED_ID = { status: 400, message: 'O atributo id é obrigatório na requisição.' }
const ERROR_INVALID_CONTENT_TYPE = { status: 415, message: 'Tipo de mídia {content-type}  da solicitação não é compatível com o sevidor, application/json' }
const ERROR_NOT_FOUND = { status: 404, message: 'Nenhum registro encontrado na requisição.' }
const ERROR_REQUIRED_NAME = { status: 400, message: 'O atributo nome é obrigatório na requisição.' }
const ERROR_NOT_FOUND_FK = { status: 404, message: 'Nenhum registro de FK foi encontrado' }
const ERROR_NOT_FOUND_ID = { status: 404, message: 'Nenhum registro de id foi encontrado' }
const ERROR_STATE = { status: 404, message: 'Este estado não existe no banco de dados' }
const ERROR_INVALID_DATE_FORMAT = { status: 400, message: 'A data deve ser inserida no formato AAAA-MM-DD' }


//Constantes de sucessos
const CREATED_ITEM = { status: 201, message: 'Registro criado com sucesso' }
const UPDATED_ITEM = { status: 200, message: 'Registro atualizado com sucesso' }
const DELETED_ITEM = { status: 200, message: 'Registro deletado com sucesso' }

module.exports = {
    ERROR_INTERNAL_SERVER,
    ERROR_REQUIRED_DATA,
    ERROR_REQUIRED_ID,
    CREATED_ITEM,
    UPDATED_ITEM,
    DELETED_ITEM,
    ERROR_INVALID_CONTENT_TYPE,
    ERROR_NOT_FOUND,
    ERROR_REQUIRED_NAME,
    ERROR_NOT_FOUND_FK,
    ERROR_INVALID_DATE_FORMAT,
    ERROR_NOT_FOUND_ID,
    ERROR_STATE
}