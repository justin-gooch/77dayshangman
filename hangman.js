$(document).ready(function(){
newWordFunction();
});


	
$(document).on('click', '#guessButton', function(){
	letterGuessFunction();
	$('#letterGuess').focus();
});

$(document).on('click', '#newWord', function(){
	$('#hangmanWordList').empty();
	$('#imageDiv').empty();
	$('#usedLetters').empty();
	newWordFunction();
});

//word list converter. 
//$(document).on('click', '#convert', function(){
	//testingLetter = $('#letterGuess').val();
	
	//letterConvertArray = testingLetter.split(' ');
	//newWordList = letterConvertArray.join(';');
	//$('#letterGuess').val('');
	//$('#letterGuess').val(newWordList);
//});
	
//on enter, run letter guess function. 
$(document).keypress(function(e) {
    if(e.which == 13) 
    {
		letterGuessFunction();		
    }
});
	

function letterGuessFunction()
{
	testingLetter = $('#letterGuess').val();
	testingLetter = testingLetter.toLowerCase();
	
	i=0
	//test to see if is in array
	if(jQuery.inArray(testingLetter, currentWordArray) > -1)
	{
		$('#letterGuess').val('');
		$('.' + testingLetter).empty();
		$('.' + testingLetter).append(testingLetter);
		while(i <= currentWordArray.length)
		{
			if(testingLetter == currentWordArray[i])
			{
				testingWordArray[i] = testingLetter
			}
			i++
		}
		
		
		//compare arrays to see if solved
		testWordString = testingWordArray.join('')
		currentWordString = currentWordArray.join('')
		if(testWordString == currentWordString)
		{
			alert("You won the entire game!")
		}				
		
		
	}
	else
	{
		//turn on or off asshole repeat letter mode
		repeatLetterMode = false;
		if(repeatLetterMode == false&&jQuery.inArray(testingLetter, usedLettersArray) > -1)
		{
			$('#letterGuess').val('');
			
		}				
			
		else
		{
			$('#letterGuess').val('');
			missedLetters++;
			$('#imageDiv').empty();
			$('#imageDiv').append("<img src='" + missedLetters + ".jpg'>");

			//add used letters to used letters div
			$('#usedLetters').append(testingLetter)
			//change images upon failure here
			if(missedLetters > 6)
			{
				alert('You had one job... And now you are dead. Try again.');
				alphabetListArray = 'abcdefghijklmnopqrstuvwxyz'.split('')
				i=0
				while(i < alphabetListArray.length)
				{
					$('.' + alphabetListArray[i]).empty();
					$('.' + alphabetListArray[i]).append(alphabetListArray[i]);
					i++;
				}			
			}
		}
	}
	usedLettersArray.push(testingLetter);
}

function newWordFunction()
{
	missedLetters = 0;
	wordList = "Certain;Bach;Ouroboros;Nyan;Opossum;Jicama;Chloe;Zagat;Gyrogroup;Ratchet;Tutankhamun;Facebook;Xerxes;The;Veterinarian;Swahili;Symbol;Sexy;Ask;Kaizen;Until;Imgur;Sounds;Skeleton;Exegesis;Nutella;Darkness;Shrimp;Escargot;Pretty;Tlaxcala;Glyph;Kitsune;Matte;Sorry;Krugman;Koch;Gaelic;Sommelier;Keane;Lanvin;Lacoste;Irish;Zeitgeist;Babel;French;Potato;Verizon;Ibiza;It;Pseudo;Tobias;Bolognese;Quirinius;Worcester;Paradigm;Kombucha;Tucson;Anime;Inchoate;Mirror;Zooey;Caribbean;Wrong;Minecraft;Skyrim;Jokes;Ch;Idea;Three;Rihanna;Hi;Redux;Niamh;Bieber;Ricochet;Aegis;McAfee;Hamburger;Monday;Artisanal;Jojoba;Acacia;Erudite;Tagalog;World;School;Past;Concierge;Ngo;Boots;Boehner;Oahu;Bleach;High;Nevada;Hermione;Tuesday;Elisha;Illinois;January;Caprese;Voldemort;Tree;Facade;Fondant;Korean;Unrequited;Zendaya;Zoology;Cthulhu;Bourgeois;Chile;No;Poem;Whilst;Jeanne;Rainbow;Nicoise;Kauai;Gucci;Exquisite;Skrillex;Economics;Tsundere;Data;Ubiquitous;Rodarte;YouTube;Angina;Nicaragua;Islay;Mozzarella;Poinsettia;Rhys;Of;Pepperoncini;Water;Volkswagen;On;Coupon;Karrueche;Qatar;Apoptosis;Melody;Hanukkah;Rendezvous;Frappe;Positive;Schengen;Gala;Aunt;Medications;Aluminum;Bird;Lien;Schedule;Jean;Fight;Acai;Euler;Neanderthal;Portuguese;Nene;Orecchiette;Slainte;Maori;Zara;Are;Pho;Thames;Crepe;Sudoku;Am;Starcraft;Appalachian;Quiche;Reconnaissance;Confession;Twitter;Bordeaux;Edinburgh;Envelope;Jubilee;Descartes;Iero;Cayenne;Google;Beau;Etsy;Milk;Coke;Gotye;Monticello;Isle;Faux;Stevia;Hegemony;Orange;Phuket;Reykjavik;Schizophrenia;Decimals;Hello;Schadenfreude;Nuclear;Genre;Iraq;Haute;Iran;Lyre;Quvenzhane;Metallurgy;Gaia;Arkansas;Vietnamese;Ephemeral;Nike;Dachshund;Thalia;Jacques;Ayn;Penne;Vehicle;Fireworks;Quesadilla;Sunday;Entrepreneur;Cache;Otolaryngology;Versace;Bruschetta;Oregon;Dengue;Louise;Philemon;Nguyen;Favre;Ago;Roosevelt;Important;English;Prosciutto;Halloween;Xavier;Om;Bourguignon;Yacht;Corpsman;Vanilla;Enjolras;Siobhan;Mature;Trapped;Raleigh;Satyr;Kefir;Yield;Ptolemy;Norwegian;Guillaume;Iron;Giclee;Ewe;Chinese;Okay;Sioux;Hummus;Yeah;Ikea;Reuters;Utrecht;Hawaii;War;Real;Vinyl;Krepo;Recall;Fanta;DuPont;Pinochle;Beside;Quetzalcoatl;Song;Worried;Pneumonia;Forgotten;Noir;Aspergers;Queue;Azure;Herb;Beyonce;Wine;Usher;Perhaps;Connection;Jaguar;Jelly;Pianist;Kinect;Guinness;Hyundai;Meme;Under;Omegle;Comment;Anise;Condolence;Umlaut;Analgesic;Name;Things;Tempest;Yeats;Before;Sh;Yvonne;Onesimus;Turmeric;Sirach;Florsheim;Oaxaca;Live;By;Koenig;Mid;Over;Belarus;Agave;Yuengling;Kukri;Ricotta;Ombre;Zyzz;February;Crayon;Letters;Macklemore;Adidas;Urdu;Salmon;Love;Burberry;Haiti;Hilbert;Balmain;Orianthi;Maldives;Skyline;Zezima;Ephrathah;At;Buffet;Arabic;Better;Tier;Quebec;Lasso;Toile;Finnish;Ubisoft;Encyclopedia;Guacamole;Suite;Detritus;Toronto;Xylophone;Hublot;Jackie;Merlot;Italian;Riesling;Focaccia;Cyber;Batman;Welsh;Macaron;Danish;Nikon;Macabre;Chiron;Guitar;Below;Ennui;Uranus;Melee;Nietzsche;Iguana;Th;Till;Either;Saturday;Voila;Quinnipiac;Manga;Bokeh;Would;Was;Ugg;Ich;Kik;Spanish;Marlboro;Loewe;Baal;Chopin;Conceal;Imogen;Finance;Shea;Coordinate;Betray;Eva;Peer;Francois;Celtic;Quay;Alive;To;Escape;Chipotle;Question;Quote;Botkier;Kamik;Edamame;Apart;Order;Beach;Lamborghini;Vosges;Koenigsegg;For;Quarter;Ubuntu;Leigh;Casino;Cyan;Peridot;Champagne;White;Pasta;Wittgenstein;Miele;Sacred;Epoch;Japanese;Yggdrasil;Joachim;Jesus;Albeit;Weiner;Xenon;Kielbasa;Financier;Mjolnir;Chanel;Croatian;Yemen;Jacked;Hammock;Homage;Ukulele;Zegna;Hiragana;Architect;Via;Router;Funny;Mochi;Thursday;Zealot;Biome;Manual;Zizek;Banana;Quixotic;Omakase;Since;Friday;Video;Be;Yahoo;Bidet;Goodbye;Our;Russian;Royksopp;Pedagogy;Peugeot;ooVoo;Pwned;Chimera;Osiris;Zebra;Route;Caramel;Qdoba;In;Sky;Sepia;Thesaurus;Vibram;Fun;Is;Guide;Eritrea;Qubit;Saoirse;Swedish;Eleven;Conch;German;Cartier;Basil;Porsche;Jorge;Oogenesis;Pwn;Armoire;Names;Vichyssoise;Iyaz;Genuine;Srixon;Wednesday;Latin;Uh;Adobe;Moleskine;Icarus;Thirty;Zirh;Audi;Chief;This;Aeropostale;Axolotl;Stephen;Daemon;Adele;Forbid;Wikipedia;Flatiron;Clothes;Ecclesiastes;Often;TomSka;Dutch;Avicii;Were;Goethe;Evanescence;Congratulations;Familiar;Sikh;Yosemite;Lucky;Wayfarer;Brasserie;Ng;Lululemon;Habakkuk;Fandango;Words;Onomatopoeia;Wale;Namaste;Low;Massachusetts;Oppa;Aubergine;Givenchy;Renaissance;Ed;Prada;Evangelion;Ciabatta;Gnocchi;Twilight;Mortgage;Ulysses;Vegan;Saucony;Book;Tour;Failte;Linux;Isla;Alphabet;Mario;Ferrari;Galil;Prayer;Machine;Grace;Gyro;Vase;Eunice;Jalapeno;Aoife;Phi;Svelte;Oeuvre;Risotto;Hoegaarden;Tinnitus;Debussy;Krzyzewski;Upsilon;Longchamp;Avatar;Dictionary;Bjork;Umlauts;Uruguay;Herobrine;Otte;Radio;Trinexx;Eminem;Quinoa;Failure;Moschino;Pecan;Kreayshawn;Weill;Curacao;Juan;Ophiuchus;Croissant;Ocarina;Utz;Louboutin;Pinterest;Designers;Liaison;Food".toLowerCase();
	//select random word from word list. 
	wordListArray = wordList.split(";");
	numberOfWords = wordListArray.length;
	randomNumber = Math.floor(Math.random()*(numberOfWords))
	
	//put word array into length
	currentPhrase = wordListArray[randomNumber];
	currentPhrase = currentPhrase.toLowerCase()
	currentPhraseArray = currentPhrase.split(" ");
	currentWordArray = Array();
	testingWordArray = Array();
	usedLettersArray = Array();
	if(currentPhraseArray.length > 0)
	{
		k=0
		i=0;
		l=1
		m=0
		while(i < currentPhraseArray.length)
		{
			currentWord = currentPhraseArray[i];
			j=0;
			while(j <= currentWord.length-1)
			{
				currentLetter = currentWord.charAt(j);
				$('#hangmanWordList').append("<div id='" + currentLetter +  m + "' class ='" + currentLetter +  " hangmanLetters' >_ </div>");
				j++;
				k++;
				m++;
				currentWordArray.push(currentLetter);
				testingWordArray.push(' ');
			}
			i++;
			if(currentPhraseArray.length > 1)
			{
				if(l < currentPhraseArray.length)
				{
					$('#hangmanWordList').append("<div id='blankSpace' class='hangmanLetters'>- </div>");
				}
				l++
			}
		}
	}
	$('#letterGuess').focus();		
}
