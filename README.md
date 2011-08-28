FoOlTypesetter
==============

FoOlTypesetter.jsx can read the Wiki comic scripts from FoOlRulez standards and insert the lines in PSDs via Photoshop

How to install
--------------
Open Photoshop, Files>Scripts>Browse...

How to use
----------
1.  Put the script in a txt file with any name (possibly no numbers in filename)
2.  Put in the same folder the images
3.  Run the script
4.	Select the folder
5.	Wait (it can take few minutes)

It will always output PSDs in a "autotypeset" folder. Original fileformat doesn't matter.

Read the script style info, for your own good.


Script style
------------
FoOlTypesetter uses Necrophantasia-style scripts. In future it will work through FoOlSlide


The script reads the last number of both the page line and the filename, to match them, in example
	==== Page 105-106 ====
will match
	filename106.jpg

The speech is grabbed from
	:Name: blah blah

The SFX is grabbed between asterisks (if there are any asterisks at all) when
	:SFX: pyouuw *crack crack*
otherwise it just grabs the whole SFX. The :SFX: caps are not compulsory.