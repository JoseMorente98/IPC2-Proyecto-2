using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using MaterialSkin;
using MaterialSkin.Controls;
using LFP_P2_TraductorC_toPyton.AnalizadoLexico;
using LFP_P2_TraductorC_toPyton.Analizador_Sint;
using LFP_P2_TraductorC_toPyton.Controladores;
using LFP_P2_TraductorC_toPyton.Modelos;
using System.Collections;
using LFP_P2_TraductorC_toPyton.Sintactico;

namespace LFP_P2_TraductorC_toPyton
{
    public partial class Form1 : MaterialForm
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {

        }

        private void Botontraductor_Click(object sender, EventArgs e)
        {
            TokenControlador.Instancia.clearListaTokens();
            AnalizadorLexico.Instancia.analizador_Lexico(richTextAnalizar.Text);
            ArrayList a = TokenControlador.Instancia.getArrayListTokens();
            //AnalizadorSintactico.Instancia.obtenerLista(a);
            SintacticoController.Instancia.obtenerLista(a);
            this.consolaTexto.Text = "";
            this.consolaTexto.AppendText(SintacticoController.Instancia.returnT());
            Console.WriteLine(SintacticoController.Instancia.returnT());
        }

        private void MaterialFlatButton1_Click(object sender, EventArgs e)
        {
            TokenControlador.Instancia.clearListaTokens();
            AnalizadorLexico.Instancia.analizador_Lexico(richTextAnalizar.Text);
            ArrayList a = TokenControlador.Instancia.getArrayListTokens();
            Console.WriteLine("-----------");

            foreach (var item in a)
            {
                Token t = (Token)item;
                Console.WriteLine(t.Descripcion + "LEXEMA" +t.Lexema);
            }


            ArrayList err = TokenControlador.Instancia.getArrayListErrors();
            foreach (var item in err)
            {
                Token t = (Token)item;
                Console.WriteLine(t.Descripcion + "LEXEMA" + t.Lexema);

            }
            Console.WriteLine("-----------");

            //AnalizadorSintactico.Instancia.obtenerLista(a);

            //Console.WriteLine(AnalizadorSintactico.Instancia.returnT());
        }
    }
}
