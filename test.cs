//Definition des variables
bool BtnPlus_Click;
bool BtnMoins_Click;
bool BtnFois_Click;
bool BtnDiv_Click;

bool BtnCalcul_Click;
bool BtnCe_Click;

bool BtnQuitter_Click;

float s, x1, x2;
string result;

//tant que quitter n'est pas cliqué
while (BtnQuitter_Click == false)
{


  if (!float.TryParse(TxtV1.Text, out x1) || !float.TryParse(TxtV2.Text, out x2))
  {
    MessageBox.Show("Deux valeurs réelles sont réquises", "Erreur", MessageBoxButtons.OK, MessageBoxIcon.Error);
    continue;
  }


  if (BtnPlus_Click == true)
  {
    s = float.Parse(TxtV1.Text) + float.Parse(TxtV2.Text);
    result = s.ToString();
  }

  if (BtnMoins_Click == true)
  {
    result = (float.Parse(TxtV1.Text) - float.Parse(TxtV2.Text)).ToString();
  }

  if (BtnFois_Click == true)
  {
    result = (float.Parse(TxtV1.Text) - float.Parse(TxtV2.Text)).ToString();
  }

  if (BtnDiv_Click == true)
  {
    result = (float.Parse(TxtV1.Text) - float.Parse(TxtV2.Text)).ToString();
  }

  if (BtnCe_Click == true)
  {
    TxtV1.Text = "0";
    TxtV2.Text = "0";
    result = "0";
  }
}






if (float.TryParse(TxtV1.Text, out x1) && float.TryParse(TxtV2.Text, out x2))
{
  s = x1 + x2;
  result = s.ToString();
}
else
  MessageBox.Show("Il faut donner deux réels !", "Erreur",
  MessageBoxButtons.OK, MessageBoxIcon.Error);

