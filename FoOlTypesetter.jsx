// enable double clicking from the Macintosh Finder or the Windows Explorer
#target photoshop

// Save the current preferences 
var startRulerUnits = app.preferences.rulerUnits;
var startTypeUnits = app.preferences.typeUnits; 
var startDisplayDialogs = app.displayDialogs;

// Set Adobe Photoshop CS5 to use pixels and display no dialogs
app.preferences.rulerUnits = Units.PIXELS;
app.preferences.typeUnits = TypeUnits.PIXELS;
app.displayDialogs = DialogModes.NO;


// suppress all dialogs
app.displayDialogs = DialogModes.NO;

// first close all the open documents
while (app.documents.length)
{
	app.activeDocument.close();
}

var processTranslation = function(folder)
{
	var fileList = folder.getFiles("*.txt");
	if(fileList.length > 0)
	{
		if(fileList[0].open('r'))
		{
			var trans = fileList[0].read();
		}
	}
	else
	{
		return false;
	}

	var result = {}
	var lines = trans.match(/[^\r\n]+/g);
	var currentPage = 0;
	for(var i = 0; i < lines.length; i++)
	{
		var page = lines[i].match("==== (Page|page)");
		if(page instanceof Array)
		{
			var currentPageTemp = lines[i].match(/(\d+)/g);
			if(!currentPageTemp instanceof Array || currentPageTemp < 1)
			{
				alert("One page didn't have a number coming with it (line " + (i+1) + " " + lines[i] + ")");
				return false;
			}
			currentPage = currentPageTemp[0];
			result[currentPage] = [];
		}
	
		var speech = lines[i].match(/^:(\w+):(.*)$/i);
		if(speech instanceof Array)
		{
			var character = speech[1];
			var text = speech[2].replace(/^\s+|\s+$/g, '');
			if(character.toLowerCase() == "sfx")
			{
				var betweenAsterisks = text.match(/\*(.*)\*$/);
				if(betweenAsterisks instanceof Array)
				{
					text = betweenAsterisks[1];
				}
			}
			result[currentPage].push({character: character, text: text});
		}
	}
	return result;	
}

// burakko color
var textColor = new SolidColor;
textColor.rgb.red = 0;
textColor.rgb.green = 0;
textColor.rgb.blue = 0;

var processFolder = function(folder, translationArr) 
{
	var fileList = folder.getFiles()
	for (var i = 0; i < fileList.length; i++) 
	{
		var file = fileList[i];
		if (file instanceof Folder)
		{
			continue;
		}
		var numArr = fileList[i].name.match(/(\d+)/g);
		if(!(numArr instanceof Array)) 
		{
			continue;
		}
	
		var strings = translationArr[numArr[numArr.length-1]];
		if(strings instanceof Object)
		{
			open(file);
			var docRef = app.activeDocument;
			docRef.changeMode(ChangeMode.RGB);
			var newTextLayer = [];
			var j = 0;
			var px = 13;
			var py = 13;
			for(var key in strings)
			{
				newTextLayer[j] = docRef.artLayers.add();
				newTextLayer[j].kind = LayerKind.TEXT;
				newTextLayer[j].textItem.contents = strings[key].text;
				newTextLayer[j].textItem.kind = TextType.PARAGRAPHTEXT;
				newTextLayer[j].textItem.justification = Justification.CENTER;
				newTextLayer[j].textItem.autoKerning = AutoKernType.OPTICAL;
				newTextLayer[j].textItem.antiAliasMethod = AntiAlias.SMOOTH;
				newTextLayer[j].textItem.position = Array(px, py);
				newTextLayer[j].textItem.font = "AnimeAce2.0BB";
				newTextLayer[j].textItem.size = "13 px";
				newTextLayer[j].textItem.width = "120 px";
				newTextLayer[j].textItem.height = "250 px";
				newTextLayer[j].textItem.color = textColor;
				j++;
				px += 23;
				py += 23;
			}
			var makefolder = Folder(file.path + "/autotypeset/");
			makefolder.create();
			//alert(file.path + "/autotypeset/" + file.name);
			docRef.saveAs(File(file.path + "/autotypeset/" + file.name));
			docRef.close(SaveOptions.DONOTSAVECHANGES);
		}
	}
}
/***
	END OF FUNCTIONS
***/


var imageFolder = Folder.selectDialog("Select top folder to process"); 

if (imageFolder != null)  
{
      var translationArr = processTranslation(imageFolder);
      if(translationArr != false)
      {
		  processFolder(imageFolder, translationArr);
      }
}


// set things back
app.preferences.rulerUnits = startRulerUnits;
app.preferences.typeUnits = startTypeUnits; 
app.displayDialogs = startDisplayDialogs;

// unset stuff
filesArr = null;