FoOlTypesetter
==============

FoOlTypesetter.jsx can read the Wiki comic scripts from FoOlRulez standards and insert the lines in PSDs via Photoshop

How to install
--------------
Open Photoshop, Files>Scripts>Browse...

How to use
----------
1. Put the script in a txt file with any name (possibly no numbers in filename)
2. Put in the same folder the images
3. Run the script
4. Select the folder
5. Wait (it can take few minutes)

It will always output PSDs in a "autotypeset" folder. Original fileformat doesn't matter.

Read the script style info, for your own good.


Script style
------------
FoOlTypesetter uses Necrophantasia-style scripts. In future it will work through FoOlSlide


The script reads the last number of both the page line and the filename, to match them, in example `==== Page 105-106 ====` will match `filename106.jpg`

The speech is grabbed from `:Name: blah blah`

The SFX is grabbed between asterisks (if there are any asterisks at all) when `:SFX: pyouuw *crack crack*` otherwise it just grabs the whole SFX. The :SFX: caps are not compulsory.


An example
----------

This is the standard that we use.

`==== Page 1: ====
:Nagi: Oh!
:Nagi: Long time no see.
----
:Nagi: Where did I go, you ask?
:Nagi: Well, I had some unavoidable circumstances...
:SFX: moji *fidget*
:Nagi: What?
:Nagi: Has it been that long?
----
:Nagi: S... Sorry.
:Nagi: Truthfully,
:Nagi: I'm sorry for making you worry...
----
:Nagi: But I'm very happy that we're able to meet again!
:Nagi: The story continues from page 5!
----
==== Page 2: ====
:Jin: Nagi...?
<s>::''Toshi: [Text on the side worth translating?]''</s> ''no''
----

==== Page 3: ====
==== Page 4: ====
Title:
Chapter 37: Cut Down Part 1
<s>::''Toshi: [Lots of text on this double page that should probably be translated.]''</s> ''Necro: We never do that sort of text.  Looks like a pain to redraw anyway''
----

==== Page 5: ====
==== Page 6: ====
<s>::''Toshi: [Missing sfx in the mini-panel at the top right.]''</s>
:SFX: guru *somersault*
----
:Zange: She's completely absorbed all of Ozuma's power...!
<s>::''Toshi: ["all of Ozuma's power"?]''</s>
:Zange: Will my current divine power be enough...
<s>::''aa: Consider a question mark or 'My current divine power/divinity may not be enough...'.''
:::''Toshi: [A question mark isn't really needed for thoughts, unless the person is having a conversation with themselves...]''</s>
:SFX: za za za *slide slide*
<s>::''Toshi: [Suggesting "slide" for these sfx.]''</s>
----
<s>::''Toshi: [Missing text.]''</s>
:Zange: Holy water...!
----
:SFX: bun *throw*
----
:SFX: pasha *splash*
----`
