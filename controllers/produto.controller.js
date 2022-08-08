const express = require("express");
const Produto = require("../models/produto.model.js");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }))




// Páginas de produtos
function index(req, res) {
    return res.render("./produto/index");
};




//Lista de produtos
async function listar(req, res) {

    const arrayProdutos = await Produto.findAll();
    return res.render("./produto/listar/listar", { produtos: arrayProdutos })

};



//adicionar novo produto
function adicionar(req, res) {
    return res.render("./produto/adicionar/adicionar");
};


async function adicionarPost(req, res) {
    const novoProduto = req.body;

    await Produto.create(novoProduto);
    return res.redirect("/produtos/listar")
};




//deletar produto por id
async function deletarDelete(req, res) {
    const id = req.params.id

    await Produto.destroy({ where: { id } });
    return res.redirect("/produtos/listar")

};

//editar produto
async function editar(req, res) {

    const id = req.params.id;
    const produto = await Produto.findByPk(id);
    return res.render("./produto/editar/editar", { name: produto.name, preco: produto.preco })

};



async function editarPost(req, res) {

    Produto.update(
        {
            name: req.body.name,
            preco: req.body.preco
        },
        {
            where:
            {
                id: req.params.id
            }
        })

    return res.redirect("/produtos/listar")
};




//exportar controller 
module.exports = { editarPost, editar, deletarDelete, adicionar, adicionarPost, listar, index };

