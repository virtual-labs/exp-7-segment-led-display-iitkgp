### Procedure

#### Please follow these steps to do the experiment.
## Part 1:

#### 1. At first go through the 7 Segment Decoder Circuit on the virtual workspace. Now see that IC 7447 is connected to the LED display package complete with VCC, GND and current-limiting resistor. Verify that the sixteen 7-segment patterns appear for 16 possible combinations of the 4-bit word DCBA while keeping LT (lamp test) and BI (blanking input) inputs high. Note that RBI should be kept high for displaying the 7-segment pattern for 0.

#### 2. Next, applying a low level signal to BI input, verify that all segments are off irrespective of the logic level of any other input..

#### 3. Next, setting RBI (ripple blanking input), D,C, B, and A to low level and setting LT input to high level, verify that all segments go off, and the RBO (ripple blanking output) output goes to a low level..

#### 4. Next, setting BI/RBO input to high and making LT input low, verify that all segments are lit up.

## Part 2:

#### 1. See how the three instances each of 7447 decoder and common-anode LED display package, are connected, test how in case of a multiple-digit display, the leading zeros can be blanked out.

#### 2. Generate table 1 for showing the status (low/high) of the seven segment o/ps a,b,c,d,e,f and g for different combinations of BCD inputs D,C,B and A, when the controlling input LT,BI/RBO and RBI all are inactive,i.e High..

#### 3. Generate table 2 to show the precedence of controlling inputs LT,BI/RBO and RBI..

#### 4. Write your observations on blanking of leading zeros in case of multiple (here, three) digit display.

#### 5. Note:- RBI of the leftmost decoder DEC1= 0 (a) Select DCBA of Dec1 to be zero(0000) while DCBA of Dec2 (the middle decoder) and Dec3 (the rightmost decoder) to the nonzero ,i.e any combination from 0001 to 1001. (b) Select DCBA=0000 for Dec1 as well as Dec2 while for Dec3, select DCBA to be of any combination between 0001 to 1001. (c) Select DCBA=0000 for all the three decoders Dec1,Dec2 and Dec3. (d) Select DCBA nonzero for all the three decoders Dec 1,dec2 & Dec3, Note:- Record the states of the three displays for all the above four cases.