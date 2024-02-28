using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace prjWinCs_Ex01_TIMER
{
    public partial class Form1 : Form
    {
        public int _ticks;
        public Form1()
        {
            InitializeComponent();
            timer1.Start();
        }

        private void timer1_Tick(object sender, EventArgs e)
        {
            _ticks++;
            label1.Text = _ticks.ToString();

            if (_ticks == 21)
            {
                label1.Text = "Ding. Done";
                timer1.Stop();
            }
        }
    }
}
