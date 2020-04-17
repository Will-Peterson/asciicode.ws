import React from 'react';

const Body = () => {
    return (
        <table>
			<thead>
				<tr>
					<th>DEC</th>
					
					<th>Symbol</th>
					<th>HTML Number</th>
					<th>HTML Name</th>
					<th>Windows ALT Key</th>
					<th>Description</th>
					</tr>
			</thead>
			<tbody>
				<tr><td>0</td><td>NUL</td><td>&amp;#000;</td><td>&nbsp;</td><td>&nbsp;</td><td>Null character</td></tr>
				<tr><td>1</td><td>SOH</td><td>&amp;#001;</td><td>&nbsp;</td><td>&nbsp;</td><td>Start of Heading</td></tr>
				<tr><td>2</td><td>STX</td><td>&amp;#002;</td><td>&nbsp;</td><td>&nbsp;</td><td>Start of Text</td></tr>
				<tr><td>3</td><td>ETX</td><td>&amp;#003;</td><td>&nbsp;</td><td>&nbsp;</td><td>End of Text</td></tr>
				<tr><td>4</td><td>EOT</td><td>&amp;#004;</td><td>&nbsp;</td><td>&nbsp;</td><td>End of Transmission</td></tr>
				<tr><td>5</td><td>ENQ</td><td>&amp;#005;</td><td>&nbsp;</td><td>&nbsp;</td><td>Enquiry</td></tr>
				<tr><td>6</td><td>ACK</td><td>&amp;#006;</td><td>&nbsp;</td><td>&nbsp;</td><td>Acknowledgment</td></tr>
				<tr><td>7</td><td>BEL</td><td>&amp;#007;</td><td>&nbsp;</td><td>&nbsp;</td><td>Bell</td></tr>
				<tr><td>8</td><td>BS</td><td>&amp;#008;</td><td>&nbsp;</td><td>&nbsp;</td><td>Backspace</td></tr>
				<tr><td>9</td><td>HT</td><td>&amp;#009;</td><td>&nbsp;</td><td>&nbsp;</td><td>Horizontal Tab</td></tr>
				<tr>
					<td>10</td>
					<td>LF</td>
					<td>&amp;#010;</td>
					<td>&nbsp;</td>
					<td>&nbsp;</td>
					<td>Line Feed</td>
				</tr>
				<tr>
					<td>11</td>
					<td>VT</td>
					<td>&amp;#011;</td>
					<td>&nbsp;</td>
					<td>&nbsp;</td>
					<td>Vertical Tab</td>
				</tr>
				<tr>
					<td>12</td>
					<td>FF</td>
					<td>&amp;#012;</td>
					<td>&nbsp;</td>
					<td>&nbsp;</td>
					<td>Form Feed</td>
				</tr>
				<tr>
					<td>13</td>
					<td>CR</td>
					<td>&amp;#013;</td>
					<td>&nbsp;</td>
					<td>&nbsp;</td>
					<td>Carriage Return</td>
				</tr>
				<tr>
					<td>14</td>
					<td>SO</td>
					<td>&amp;#014;</td>
					<td>&nbsp;</td>
					<td>&nbsp;</td>
					<td>Shift Out / X-On</td>
				</tr>
				<tr>
					<td>15</td>
					<td>SI</td>
					<td>&amp;#015;</td>
					<td>&nbsp;</td>
					<td>&nbsp;</td>
					<td>Shift In / X-Off</td>
				</tr>
				<tr>
					<td>16</td>
					<td>DLE</td>
					<td>&amp;#016;</td>
					<td>&nbsp;</td>
					<td>&nbsp;</td>
					<td>Data Line Escape</td>
				</tr>
				<tr>
					<td>17</td>
					<td>DC1</td>
					<td>&amp;#017;</td>
					<td>&nbsp;</td>
					<td>&nbsp;</td>
					<td>Device Control 1 (oft. XON)</td>
				</tr>

				<tr>
					<td>18</td>
					<td>DC2</td>
					<td>&amp;#018;</td>
					<td>&nbsp;</td>
					<td>&nbsp;</td>
					<td>Device Control 2</td>
				</tr>
				<tr>
					<td>19</td>
					<td>DC3</td>
					<td>&amp;#019;</td>
					<td>&nbsp;</td>
					<td>&nbsp;</td>
					<td>Device Control 3 (oft. XOFF)</td>
				</tr>
				<tr>
					<td>20</td>
					<td>DC4</td>
					<td>&amp;#020;</td>
					<td>&nbsp;</td>
					<td>&nbsp;</td>
					<td>Device Control 4</td>
				</tr>
				<tr>
					<td>21</td>
					<td>NAK</td>
					<td>&amp;#021;</td>
					<td>&nbsp;</td>
					<td>&nbsp;</td>
					<td>Negative Acknowledgement</td>
				</tr>
				<tr>
					<td>22</td>
					<td>SYN</td>
					<td>&amp;#022;</td>
					<td>&nbsp;</td>
					<td>&nbsp;</td>
					<td>Synchronous Idle</td>
				</tr>
				<tr>
					<td>23</td>
					<td>ETB</td>
					<td>&amp;#023;</td>
					<td>&nbsp;</td>
					<td>&nbsp;</td>
					<td>End of Transmit Block</td>
				</tr>
				<tr>
					<td>24</td>
					<td>CAN</td>
					<td>&amp;#024;</td>
					<td>&nbsp;</td>
					<td>&nbsp;</td>
					<td>Cancel</td>
				</tr>
				<tr>
					<td>25</td>
					<td>EM</td>
					<td>&amp;#025;</td>
					<td>&nbsp;</td>
					<td>&nbsp;</td>
					<td>End of Medium</td>
				</tr>
				<tr>
					<td>26</td>
					<td>SUB</td>
					<td>&amp;#026;</td>
					<td>&nbsp;</td>
					<td>&nbsp;</td>
					<td>Substitute</td>
				</tr>
				<tr>
					<td>27</td>
					<td>ESC</td>
					<td>&amp;#027;</td>
					<td>&nbsp;</td>
					<td>&nbsp;</td>
					<td>Escape</td>
				</tr>
				<tr>
					<td>28</td>
					<td>FS</td>
					<td>&amp;#028;</td>
					<td>&nbsp;</td>
					<td>&nbsp;</td>
					<td>File Separator</td>
				</tr>
				<tr><td>29</td><td>GS</td><td>&amp;#029;</td><td>&nbsp;</td><td>&nbsp;</td><td>Group Separator</td></tr>
				<tr><td>30</td><td>RS</td><td>&amp;#030;</td><td>&nbsp;</td><td>&nbsp;</td><td>Record Separator</td></tr>
				<tr><td>31</td><td>US</td><td>&amp;#031;</td><td>&nbsp;</td><td>&nbsp;</td><td>Unit Separator</td></tr>
				<tr><td>32</td><td>&nbsp;</td><td>&amp;#32;</td><td>&nbsp;</td><td>Alt + 032 <i>OR</i> Alt + 32</td><td>Space</td></tr>
				<tr><td>33</td><td>!</td><td>&amp;#33;</td><td>&nbsp;</td><td>Alt + 033 <i>OR</i> Alt + 33</td><td>Exclamation mark</td></tr>
				<tr><td>34</td><td>&quot;</td><td>&amp;#34;</td><td>&amp;quot;</td><td>Alt + 034 <i>OR</i> Alt + 34</td><td>Double quotes or speech marks</td></tr>
				<tr><td>35</td><td>#</td><td>&amp;#35;</td><td>&nbsp;</td><td>Alt + 035 <i>OR</i> Alt + 35</td><td>Number</td></tr>
				<tr><td>36</td><td>$</td><td>&amp;#36;</td><td>&nbsp;</td><td>Alt + 036 <i>OR</i> Alt + 36</td><td>Dollar</td></tr>
				<tr><td>37</td><td>%</td><td>&amp;#37;</td><td>&nbsp;</td><td>Alt + 037 <i>OR</i> Alt + 37</td><td>Percent</td></tr>
				<tr><td>38</td><td>&amp;</td><td>&amp;#38;</td><td>&amp;amp;</td><td>Alt + 038 <i>OR</i> Alt + 38</td><td>Ampersand</td></tr>
				<tr><td>39</td><td>'</td><td>&amp;#39;</td><td>&nbsp;</td><td>Alt + 039 <i>OR</i> Alt + 39</td><td>Single quote</td></tr>
				<tr><td>40</td><td>(</td><td>&amp;#40;</td><td>&nbsp;</td><td>Alt + 040 <i>OR</i> Alt + 40</td><td>Open parenthesis or open bracket</td></tr>
				<tr><td>41</td><td>)</td><td>&amp;#41;</td><td>&nbsp;</td><td>Alt + 041 <i>OR</i> Alt + 41</td><td>Close parenthesis or close bracket</td></tr>
				<tr><td>42</td><td>*</td><td>&amp;#42;</td><td>&nbsp;</td><td>Alt + 042 <i>OR</i> Alt + 42</td><td>Asterisk</td></tr>
				<tr><td>43</td><td>+</td><td>&amp;#43;</td><td>&nbsp;</td><td>Alt + 043 <i>OR</i> Alt + 43</td><td>Plus</td></tr>
				<tr><td>44</td><td>,</td><td>&amp;#44;</td><td>&nbsp;</td><td>Alt + 044 <i>OR</i> Alt + 44</td><td>Comma</td></tr>
				<tr><td>45</td><td>-</td><td>&amp;#45;</td><td>&nbsp;</td><td>Alt + 045 <i>OR</i> Alt + 45</td><td>Hyphen</td></tr>
				<tr><td>46</td><td>.</td><td>&amp;#46;</td><td>&nbsp;</td><td>Alt + 046 <i>OR</i> Alt + 46</td><td>Period, dot, or full stop</td></tr>
				<tr><td>47</td><td>/</td><td>&amp;#47;</td><td>&nbsp;</td><td>Alt + 047 <i>OR</i> Alt + 47</td><td>Slash or divide</td></tr>
				<tr><td>48</td><td>0</td><td>&amp;#48;</td><td>&nbsp;</td><td>Alt + 048 <i>OR</i> Alt + 48</td><td>Zero</td></tr>
				<tr><td>49</td><td>1</td><td>&amp;#49;</td><td>&nbsp;</td><td>Alt + 049 <i>OR</i> Alt + 49</td><td>One</td></tr>
				<tr><td>50</td><td>2</td><td>&amp;#50;</td><td>&nbsp;</td><td>Alt + 050 <i>OR</i> Alt + 50</td><td>Two</td></tr>
				<tr><td>51</td><td>3</td><td>&amp;#51;</td><td>&nbsp;</td><td>Alt + 051 <i>OR</i> Alt + 51</td><td>Three</td></tr>
				<tr><td>52</td><td>4</td><td>&amp;#52;</td><td>&nbsp;</td><td>Alt + 052 <i>OR</i> Alt + 52</td><td>Four</td></tr>
				<tr><td>53</td><td>5</td><td>&amp;#53;</td><td>&nbsp;</td><td>Alt + 053 <i>OR</i> Alt + 53</td><td>Five</td></tr>
				<tr><td>54</td><td>6</td><td>&amp;#54;</td><td>&nbsp;</td><td>Alt + 054 <i>OR</i> Alt + 54</td><td>Six</td></tr>
				<tr><td>55</td><td>7</td><td>&amp;#55;</td><td>&nbsp;</td><td>Alt + 055 <i>OR</i> Alt + 55</td><td>Seven</td></tr>
				<tr><td>56</td><td>8</td><td>&amp;#56;</td><td>&nbsp;</td><td>Alt + 056 <i>OR</i> Alt + 56</td><td>Eight</td></tr>
				<tr><td>57</td><td>9</td><td>&amp;#57;</td><td>&nbsp;</td><td>Alt + 057 <i>OR</i> Alt + 57</td><td>Nine</td></tr>
				<tr><td>58</td><td>:</td><td>&amp;#58;</td><td>&nbsp;</td><td>Alt + 058 <i>OR</i> Alt + 58</td><td>Colon</td></tr>
				<tr><td>59</td><td>;</td><td>&amp;#59;</td><td>&nbsp;</td><td>Alt + 059 <i>OR</i> Alt + 59</td><td>Semicolon</td></tr>
				<tr><td>60</td><td>&lt;</td><td>&amp;#60;</td><td>&amp;lt;</td><td>Alt + 060 <i>OR</i> Alt + 60</td><td>Less than or open angled bracket</td></tr>
				<tr><td>61</td><td>=</td><td>&amp;#61;</td><td>&nbsp;</td><td>Alt + 061 <i>OR</i> Alt + 61</td><td>Equals</td></tr>
				<tr><td>62</td><td>&gt;</td><td>&amp;#62;</td><td>&amp;gt;</td><td>Alt + 062 <i>OR</i> Alt + 62</td><td>Greater than or close angled bracket</td></tr>
				<tr><td>63</td><td>?</td><td>&amp;#63;</td><td>&nbsp;</td><td>Alt + 063 <i>OR</i> Alt + 63</td><td>Question mark</td></tr>
				<tr><td>64</td><td>@</td><td>&amp;#64;</td><td>&nbsp;</td><td>Alt + 064 <i>OR</i> Alt + 64</td><td>At symbol</td></tr>
				<tr><td>65</td><td>A</td><td>&amp;#65;</td><td>&nbsp;</td><td>Alt + 065 <i>OR</i> Alt + 65</td><td>Uppercase A</td></tr>
				<tr><td>66</td><td>B</td><td>&amp;#66;</td><td>&nbsp;</td><td>Alt + 066 <i>OR</i> Alt + 66</td><td>Uppercase B</td></tr>
				<tr><td>67</td><td>C</td><td>&amp;#67;</td><td>&nbsp;</td><td>Alt + 067 <i>OR</i> Alt + 67</td><td>Uppercase C</td></tr>
				<tr><td>68</td><td>D</td><td>&amp;#68;</td><td>&nbsp;</td><td>Alt + 068 <i>OR</i> Alt + 68</td><td>Uppercase D</td></tr>
				<tr><td>69</td><td>E</td><td>&amp;#69;</td><td>&nbsp;</td><td>Alt + 069 <i>OR</i> Alt + 69</td><td>Uppercase E</td></tr>
				<tr><td>70</td><td>F</td><td>&amp;#70;</td><td>&nbsp;</td><td>Alt + 070 <i>OR</i> Alt + 70</td><td>Uppercase F</td></tr>
				<tr><td>71</td><td>G</td><td>&amp;#71;</td><td>&nbsp;</td><td>Alt + 071 <i>OR</i> Alt + 71</td><td>Uppercase G</td></tr>
				<tr><td>72</td><td>H</td><td>&amp;#72;</td><td>&nbsp;</td><td>Alt + 072 <i>OR</i> Alt + 72</td><td>Uppercase H</td></tr>
				<tr><td>73</td><td>I</td><td>&amp;#73;</td><td>&nbsp;</td><td>Alt + 073 <i>OR</i> Alt + 73</td><td>Uppercase I</td></tr>
				<tr><td>74</td><td>J</td><td>&amp;#74;</td><td>&nbsp;</td><td>Alt + 074 <i>OR</i> Alt + 74</td><td>Uppercase J</td></tr>
				<tr><td>75</td><td>K</td><td>&amp;#75;</td><td>&nbsp;</td><td>Alt + 075 <i>OR</i> Alt + 75</td><td>Uppercase K</td></tr>
				<tr><td>76</td><td>L</td><td>&amp;#76;</td><td>&nbsp;</td><td>Alt + 076 <i>OR</i> Alt + 76</td><td>Uppercase L</td></tr>
				<tr><td>77</td><td>M</td><td>&amp;#77;</td><td>&nbsp;</td><td>Alt + 077 <i>OR</i> Alt + 77</td><td>Uppercase M</td></tr>
				<tr><td>78</td><td>N</td><td>&amp;#78;</td><td>&nbsp;</td><td>Alt + 078 <i>OR</i> Alt + 78</td><td>Uppercase N</td></tr>
				<tr><td>79</td><td>O</td><td>&amp;#79;</td><td>&nbsp;</td><td>Alt + 079 <i>OR</i> Alt + 79</td><td>Uppercase O</td></tr>
				<tr><td>80</td><td>P</td><td>&amp;#80;</td><td>&nbsp;</td><td>Alt + 080 <i>OR</i> Alt + 80</td><td>Uppercase P</td></tr>
				<tr><td>81</td><td>Q</td><td>&amp;#81;</td><td>&nbsp;</td><td>Alt + 081 <i>OR</i> Alt + 81</td><td>Uppercase Q</td></tr>
				<tr><td>82</td><td>R</td><td>&amp;#82;</td><td>&nbsp;</td><td>Alt + 082 <i>OR</i> Alt + 82</td><td>Uppercase R</td></tr>
				<tr><td>83</td><td>S</td><td>&amp;#83;</td><td>&nbsp;</td><td>Alt + 083 <i>OR</i> Alt + 83</td><td>Uppercase S</td></tr>
				<tr><td>84</td><td>T</td><td>&amp;#84;</td><td>&nbsp;</td><td>Alt + 084 <i>OR</i> Alt + 84</td><td>Uppercase T</td></tr>
				<tr><td>85</td><td>U</td><td>&amp;#85;</td><td>&nbsp;</td><td>Alt + 085 <i>OR</i> Alt + 85</td><td>Uppercase U</td></tr>
				<tr><td>86</td><td>V</td><td>&amp;#86;</td><td>&nbsp;</td><td>Alt + 086 <i>OR</i> Alt + 86</td><td>Uppercase V</td></tr>
				<tr><td>87</td><td>W</td><td>&amp;#87;</td><td>&nbsp;</td><td>Alt + 087 <i>OR</i> Alt + 87</td><td>Uppercase W</td></tr>
				<tr><td>88</td><td>X</td><td>&amp;#88;</td><td>&nbsp;</td><td>Alt + 088 <i>OR</i> Alt + 88</td><td>Uppercase X</td></tr>
				<tr><td>89</td><td>Y</td><td>&amp;#89;</td><td>&nbsp;</td><td>Alt + 089 <i>OR</i> Alt + 89</td><td>Uppercase Y</td></tr>
				<tr><td>90</td><td>Z</td><td>&amp;#90;</td><td>&nbsp;</td><td>Alt + 090 <i>OR</i> Alt + 90</td><td>Uppercase Z</td></tr>
				<tr><td>91</td><td>[</td><td>&amp;#91;</td><td>&nbsp;</td><td>Alt + 091 <i>OR</i> Alt + 91</td><td>Opening bracket</td></tr>
				<tr><td>92</td><td>\</td><td>&amp;#92;</td><td>&nbsp;</td><td>Alt + 092 <i>OR</i> Alt + 92</td><td>Backslash</td></tr>
				<tr><td>93</td><td>]</td><td>&amp;#93;</td><td>&nbsp;</td><td>Alt + 093 <i>OR</i> Alt + 93</td><td>Closing bracket</td></tr>
				<tr><td>94</td><td>^</td><td>&amp;#94;</td><td>&nbsp;</td><td>Alt + 094 <i>OR</i> Alt + 94</td><td>Caret or circumflex</td></tr>
				<tr><td>95</td><td>_</td><td>&amp;#95;</td><td>&nbsp;</td><td>Alt + 095 <i>OR</i> Alt + 95</td><td>Underscore</td></tr>
				<tr><td>96</td><td>`</td><td>&amp;#96;</td><td>&nbsp;</td><td>Alt + 096 <i>OR</i> Alt + 96</td><td>Grave accent</td></tr>
				<tr><td>97</td><td>a</td><td>&amp;#97;</td><td>&nbsp;</td><td>Alt + 097 <i>OR</i> Alt + 97</td><td>Lowercase a</td></tr>
				<tr><td>98</td><td>b</td><td>&amp;#98;</td><td>&nbsp;</td><td>Alt + 098 <i>OR</i> Alt + 98</td><td>Lowercase b</td></tr>
				<tr><td>99</td><td>c</td><td>&amp;#99;</td><td>&nbsp;</td><td>Alt + 099 <i>OR</i> Alt + 99</td><td>Lowercase c</td></tr>
				<tr><td>100</td><td>d</td><td>&amp;#100;</td><td>&nbsp;</td><td>Alt + 0100 <i>OR</i> Alt + 100</td><td>Lowercase d</td></tr>
				<tr><td>101</td><td>e</td><td>&amp;#101;</td><td>&nbsp;</td><td>Alt + 0101 <i>OR</i> Alt + 101</td><td>Lowercase e</td></tr>
				<tr><td>102</td><td>f</td><td>&amp;#102;</td><td>&nbsp;</td><td>Alt + 0102 <i>OR</i> Alt + 102</td><td>Lowercase f</td></tr>
				<tr><td>103</td><td>g</td><td>&amp;#103;</td><td>&nbsp;</td><td>Alt + 0103 <i>OR</i> Alt + 103</td><td>Lowercase g</td></tr>
				<tr><td>104</td><td>h</td><td>&amp;#104;</td><td>&nbsp;</td><td>Alt + 0104 <i>OR</i> Alt + 104</td><td>Lowercase h</td></tr>
				<tr><td>105</td><td>i</td><td>&amp;#105;</td><td>&nbsp;</td><td>Alt + 0105 <i>OR</i> Alt + 105</td><td>Lowercase i</td></tr>
				<tr><td>106</td><td>j</td><td>&amp;#106;</td><td>&nbsp;</td><td>Alt + 0106 <i>OR</i> Alt + 106</td><td>Lowercase j</td></tr>
				<tr><td>107</td><td>k</td><td>&amp;#107;</td><td>&nbsp;</td><td>Alt + 0107 <i>OR</i> Alt + 107</td><td>Lowercase k</td></tr>
				<tr><td>108</td><td>l</td><td>&amp;#108;</td><td>&nbsp;</td><td>Alt + 0108 <i>OR</i> Alt + 108</td><td>Lowercase l</td></tr>
				<tr><td>109</td><td>m</td><td>&amp;#109;</td><td>&nbsp;</td><td>Alt + 0109 <i>OR</i> Alt + 109</td><td>Lowercase m</td></tr>
				<tr><td>110</td><td>n</td><td>&amp;#110;</td><td>&nbsp;</td><td>Alt + 0110 <i>OR</i> Alt + 110</td><td>Lowercase n</td></tr>
				<tr><td>111</td><td>o</td><td>&amp;#111;</td><td>&nbsp;</td><td>Alt + 0111 <i>OR</i> Alt + 111</td><td>Lowercase o</td></tr>
				<tr><td>112</td><td>p</td><td>&amp;#112;</td><td>&nbsp;</td><td>Alt + 0112 <i>OR</i> Alt + 112</td><td>Lowercase p</td></tr>
				<tr><td>113</td><td>q</td><td>&amp;#113;</td><td>&nbsp;</td><td>Alt + 0113 <i>OR</i> Alt + 113</td><td>Lowercase q</td></tr>
				<tr><td>114</td><td>r</td><td>&amp;#114;</td><td>&nbsp;</td><td>Alt + 0114 <i>OR</i> Alt + 114</td><td>Lowercase r</td></tr>
				<tr><td>115</td><td>s</td><td>&amp;#115;</td><td>&nbsp;</td><td>Alt + 0115 <i>OR</i> Alt + 115</td><td>Lowercase s</td></tr>
				<tr><td>116</td><td>t</td><td>&amp;#116;</td><td>&nbsp;</td><td>Alt + 0116 <i>OR</i> Alt + 116</td><td>Lowercase t</td></tr>
				<tr><td>117</td><td>u</td><td>&amp;#117;</td><td>&nbsp;</td><td>Alt + 0117 <i>OR</i> Alt + 117</td><td>Lowercase u</td></tr>
				<tr><td>118</td><td>v</td><td>&amp;#118;</td><td>&nbsp;</td><td>Alt + 0118 <i>OR</i> Alt + 118</td><td>Lowercase v</td></tr>
				<tr><td>119</td><td>w</td><td>&amp;#119;</td><td>&nbsp;</td><td>Alt + 0119 <i>OR</i> Alt + 119</td><td>Lowercase w</td></tr>
				<tr><td>120</td><td>x</td><td>&amp;#120;</td><td>&nbsp;</td><td>Alt + 0120 <i>OR</i> Alt + 120</td><td>Lowercase x</td></tr>
				<tr><td>121</td><td>y</td><td>&amp;#121;</td><td>&nbsp;</td><td>Alt + 0121 <i>OR</i> Alt + 121</td><td>Lowercase y</td></tr>
				<tr><td>122</td><td>z</td><td>&amp;#122;</td><td>&nbsp;</td><td>Alt + 0122 <i>OR</i> Alt + 122</td><td>Lowercase z</td></tr>
				<tr><td>123</td><td>{'{'}</td><td>&amp;#123;</td><td>&nbsp;</td><td>Alt + 0123 <i>OR</i> Alt + 123</td><td>Opening brace</td></tr>
				<tr><td>124</td><td>|</td><td>&amp;#124;</td><td>&nbsp;</td><td>Alt + 0124 <i>OR</i> Alt + 124</td><td>Pipe or vertical bar</td></tr>
				<tr><td>125</td><td>{'}'}</td><td>&amp;#125;</td><td>&nbsp;</td><td>Alt + 0125 <i>OR</i> Alt + 125</td><td>Closing brace</td></tr>
				<tr><td>126</td><td>~</td><td>&amp;#126;</td><td>&nbsp;</td><td>Alt + 0126 <i>OR</i> Alt + 126</td><td>Tilde or equivalency sign</td></tr>
				<tr><td>127</td><td>DEL</td><td>&amp;#127;</td><td>&nbsp;</td><td>&nbsp;</td><td>Delete</td></tr>
				
				{/* MADE CHANGES BELOW */}

				{/* &#169; -- &copy; -- alt+0169 */}
				
				<tr><td>128</td><td>Ç</td><td>&amp;#199;</td><td>&amp;Ccedil;</td><td>Alt + 0199 <i>OR</i> Alt + 128</td><td>Latin capital letter C with cedilla</td></tr>
				<tr><td>129</td><td>ü</td><td>&amp;#252;</td><td>&amp;uuml;</td><td>Alt + 0252 <i>OR</i> Alt + 129</td><td>Latin small letter U with diaeresis</td></tr>
				<tr><td>130</td><td>é</td><td>&amp;#233;</td><td>&amp;eacute;</td><td>Alt + 0233 <i>OR</i> Alt + 130</td><td>Latin small letter E with acute</td></tr>
				<tr><td>131</td><td>â</td><td>&amp;#226;</td><td>&amp;acirc;</td><td>Alt + 0226 <i>OR</i> Alt + 131</td><td>Latin small letter A with circumflex</td></tr>
				<tr><td>132</td><td>ä</td><td>&amp;#228;</td><td>&amp;auml;</td><td>Alt + 0228 <i>OR</i> Alt + 132</td><td>Latin small letter A with diaeresis</td></tr>
				<tr><td>133</td><td>à</td><td>&amp;#224;</td><td>&amp;agrave;</td><td>Alt + 0224 <i>OR</i> Alt + 133</td><td>Latin small letter A with grave</td></tr>
				<tr><td>134</td><td>å</td><td>&amp;#229;</td><td>&amp;aring;</td><td>Alt + 0229 <i>OR</i> Alt + 134</td><td>Latin small letter a with ring above</td></tr>
				<tr><td>135</td><td>ç</td><td>&amp;#231;</td><td>&amp;ccedil;</td><td>Alt + 0231 <i>OR</i> Alt + 135</td><td>Latin small letter c with cedilla</td></tr>
				<tr><td>136</td><td>ê</td><td>&amp;#234;</td><td>&amp;ecirc;</td><td>Alt + 0234 <i>OR</i> Alt + 136</td><td>Latin small letter e with circumflex</td></tr>
				<tr><td>137</td><td>ë</td><td>&amp;#235;</td><td>&amp;euml;</td><td>Alt + 0235 <i>OR</i> Alt + 137</td><td>Latin small letter e with diaeresis</td></tr>
				<tr><td>138</td><td>è</td><td>&amp;#232;</td><td>&amp;egrave;</td><td>Alt + 0232 <i>OR</i> Alt + 138</td><td>Latin small letter e with grave</td></tr>
				<tr><td>139</td><td>ï</td><td>&amp;#239;</td><td>&amp;iuml;</td><td>Alt + 0239 <i>OR</i> Alt + 139</td><td>Latin small letter i with diaeresis</td></tr>
				<tr><td>140</td><td>î</td><td>&amp;#238;</td><td>&amp;icirc;</td><td>Alt + 0238 <i>OR</i> Alt + 140</td><td>Latin small letter i with circumflex</td></tr>
				<tr><td>141</td><td>ì</td><td>&amp;#236;</td><td>&amp;igrave;</td><td>Alt + 0236 <i>OR</i> Alt + 141</td><td>Latin small letter i with grave</td></tr>
				<tr><td>142</td><td>Ä</td><td>&amp;#196;</td><td>&amp;Auml;</td><td>Alt + 0196 <i>OR</i> Alt + 142</td><td>Latin capital letter A with diaeresis</td></tr>
				<tr><td>143</td><td>Å</td><td>&amp;#197;</td><td>&amp;Aring;</td><td>Alt + 0197 <i>OR</i> Alt + 143</td><td>Latin capital letter A with ring above</td></tr>
				<tr><td>144</td><td>É</td><td>&amp;#201;</td><td>&amp;Eacute;</td><td>Alt + 0201 <i>OR</i> Alt + 144</td><td>Latin capital letter E with acute</td></tr>
				<tr><td>145</td><td>æ</td><td>&amp;#230;</td><td>&amp;aelig;</td><td>Alt + 0230 <i>OR</i> Alt + 145</td><td>Latin small letter ae</td></tr>
				<tr><td>146</td><td>Æ</td><td>&amp;#198;</td><td>&amp;AElig;</td><td>Alt + 0198 <i>OR</i> Alt + 146</td><td>Latin capital letter AE</td></tr>
				<tr><td>147</td><td>ô</td><td>&amp;#244;</td><td>&amp;ocirc;</td><td>Alt + 0244 <i>OR</i> Alt + 147</td><td>Latin small letter o with circumflex</td></tr>
				<tr><td>148</td><td>ö</td><td>&amp;#246;</td><td>&amp;ouml;</td><td>Alt + 0246 <i>OR</i> Alt + 148</td><td>Latin small letter o with diaeresis or umlaut</td></tr>
				<tr><td>149</td><td>ò</td><td>&amp;#242;</td><td>&amp;ograve;</td><td>Alt + 0242 <i>OR</i> Alt + 149</td><td>Latin small letter o with grave</td></tr>
				<tr><td>150</td><td>û</td><td>&amp;#251;</td><td>&amp;ucirc;</td><td>Alt + 0251 <i>OR</i> Alt + 150</td><td>Latin small letter u with circumflex</td></tr>
				<tr><td>151</td><td>ù</td><td>&amp;#249;</td><td>&amp;ugrave;</td><td>Alt + 0249 <i>OR</i> Alt + 151</td><td>Latin small letter u with grave</td></tr>
				<tr><td>152</td><td>ÿ</td><td>&amp;#255;</td><td>&amp;yuml;</td><td>Alt + 0255 <i>OR</i> Alt + 152</td><td>Latin small letter y with diaeresis</td></tr>
				<tr><td>153</td><td>Ö</td><td>&amp;#214;</td><td>&amp;Ouml;</td><td>Alt + 0214 <i>OR</i> Alt + 153</td><td>Latin capital letter O with diaeresis</td></tr>
				<tr><td>154</td><td>Ü</td><td>&amp;#220;</td><td>&amp;Uuml;</td><td>Alt + 0220 <i>OR</i> Alt + 154</td><td>Latin capital letter U with diaeresis</td></tr>
				<tr><td>155</td><td>ø</td><td>&amp;#248;</td><td>&amp;oslash;</td><td>Alt + 0248</td><td>Latin small letter o with slash</td></tr>
				<tr><td>156</td><td>£</td><td>&amp;#163;</td><td>&amp;pound;</td><td>Alt + 0163 <i>OR</i> Alt + 156</td><td>Pound sign</td></tr>
				<tr><td>157</td><td>Ø</td><td>&amp;#216;</td><td>&amp;Oslash;</td><td>Alt + 0216</td><td>Latin capital letter O with slash</td></tr>
				<tr><td>158</td><td>×</td><td>&amp;#215;</td><td>&amp;times;</td><td>Alt + 0215</td><td>Multiplication sign</td></tr>
				<tr><td>159</td><td>ƒ</td><td>&amp;#402;</td><td>&amp;fnof;</td><td>Alt + 159</td><td>Function</td></tr>
				<tr><td>160</td><td>á</td><td>&amp;#225;</td><td>&amp;aacute;</td><td>Alt + 0225 <i>OR</i> Alt + 160</td><td>Latin small letter a with acute</td></tr>
				<tr><td>161</td><td>í</td><td>&amp;#237;</td><td>&amp;iacute;</td><td>Alt + 0237 <i>OR</i> Alt + 161</td><td>Latin small letter i with acute</td></tr>
				<tr><td>162</td><td>ó</td><td>&amp;#243;</td><td>&amp;oacute;</td><td>Alt + 0243 <i>OR</i> Alt + 162</td><td>Latin small letter o with acute</td></tr>
				<tr><td>163</td><td>ú</td><td>&amp;#250;</td><td>&amp;uacute;</td><td>Alt + 0250 <i>OR</i> Alt + 163</td><td>Latin small letter u with acute</td></tr>
				<tr><td>164</td><td>ñ</td><td>&amp;#241;</td><td>&amp;ntilde;</td><td>Alt + 0241 <i>OR</i> Alt + 164</td><td>Latin small letter n with tilde</td></tr>
				<tr><td>165</td><td>Ñ</td><td>&amp;#209;</td><td>&amp;Ntilde;</td><td>Alt + 0209 <i>OR</i> Alt + 165</td><td>Latin capital letter N with tilde</td></tr>
				<tr><td>166</td><td>ª</td><td>&amp;#170;</td><td>&amp;ordf;</td><td>Alt + 0170 <i>OR</i> Alt + 166</td><td>Feminine ordinal indicator</td></tr>
				<tr><td>167</td><td>°</td><td>&amp;#176;</td><td>&amp;deg;</td><td>Alt + 0176</td><td>Degree sign or masculine ordinal indicator</td></tr>
				<tr><td>168</td><td>¿</td><td>&amp;#191;</td><td>&amp;iquest;</td><td>Alt + 0191 <i>OR</i> Alt + 168</td><td>Inverted question mark</td></tr>
				<tr><td>169</td><td>®</td><td>&amp;#174;</td><td>&amp;reg;</td><td>Alt + 0174</td><td>Registered trade mark sign</td></tr>
				<tr><td>170</td><td>¬</td><td>&amp;#172;</td><td>&amp;not;</td><td>Alt + 0172</td><td>Not sign</td></tr>
				<tr><td>171</td><td>½</td><td>&amp;#189;</td><td>&amp;frac12;</td><td>Alt + 0189 <i>OR</i> Alt + 171</td><td>Fraction one half</td></tr>
				<tr><td>172</td><td>¼</td><td>&amp;#188;</td><td>&amp;frac14;</td><td>Alt + 0188 <i>OR</i> Alt + 172</td><td>Fraction one quarter</td></tr>
				<tr><td>173</td><td>¡</td><td>&amp;#161;</td><td>&amp;iexcl;</td><td>Alt + 0161 <i>OR</i> Alt + 173</td><td>Inverted exclamation mark</td></tr>
				<tr><td>174</td><td>«</td><td>&amp;#171;</td><td>&amp;laquo;</td><td>Alt + 0171 <i>OR</i> Alt + 174</td><td>Left double angle quotes</td></tr>
				<tr><td>175</td><td>»</td><td>&amp;#187;</td><td>&amp;raquo;</td><td>Alt + 0187 <i>OR</i> Alt + 175</td><td>Right double angle quotes</td></tr>
				<tr><td>176</td><td>░</td><td></td><td></td><td>Alt + 176</td><td>Low density dotted graphic character</td></tr>
				<tr><td>177</td><td>▒</td><td></td><td></td><td>Alt + 177</td><td>Medium density dotted graphic character</td></tr>
				<tr><td>178</td><td>▓</td><td></td><td></td><td>Alt + 178</td><td>High density dotted graphic character</td></tr>
				<tr><td>179</td><td>│</td><td></td><td></td><td>Alt + 179</td><td>Box drawing character - single verticle line</td></tr>
				<tr><td>180</td><td>┤</td><td></td><td></td><td>Alt + 180</td><td>Box drawing character - single verticle and left line</td></tr>
				<tr><td>181</td><td>Á</td><td>&amp;#193;</td><td>&amp;Aacute;</td><td>Alt + 0193</td><td>Latin capital letter A with acute</td></tr>
				<tr><td>182</td><td>Â</td><td>&amp;#194;</td><td>&amp;Acirc;</td><td>Alt + 0194</td><td>Latin capital letter A with circumflex</td></tr>
				<tr><td>183</td><td>À</td><td>&amp;#192;</td><td>&amp;Agrave;</td><td>Alt + 0192</td><td>Latin capital letter A with grave</td></tr>
				<tr><td>184</td><td>©</td><td>&amp;#169;</td><td>&amp;copy;</td><td>Alt + 0169</td><td>Copyright sign</td></tr>
				<tr><td>185</td><td>╣</td><td></td><td></td><td>Alt + 185</td><td>Box drawing character - double verticle and left line</td></tr>
				<tr><td>186</td><td>║</td><td></td><td></td><td>Alt + 186</td><td>Box drawing character - double verticle line</td></tr>
				<tr><td>187</td><td>╗</td><td></td><td></td><td>Alt + 187</td><td>Box drawing character - double line upper right corner</td></tr>
				<tr><td>188</td><td>╝</td><td></td><td></td><td>Alt + 188</td><td>Box drawing character - double line lower right corner</td></tr>
				<tr><td>189</td><td>¢</td><td>&amp;#162;</td><td>&amp;cent;</td><td>Alt + 0162 <i>OR</i> Alt + 155</td><td>Cent sign</td></tr>
				<tr><td>190</td><td>¥</td><td>&amp;#165;</td><td>&amp;yen;</td><td>Alt + 0165 <i>OR</i> Alt + 157</td><td>Yen sign</td></tr>
				<tr><td>191</td><td>┐</td><td></td><td></td><td>Alt + 191</td><td>Box drawing character - single line upper right corner</td></tr>
				<tr><td>192</td><td>└</td><td></td><td></td><td>Alt + 192</td><td>Box drawing character - single line lower left corner</td></tr>
				<tr><td>193</td><td>┴</td><td></td><td></td><td>Alt + 193</td><td>Box drawing character - single line horizontal and verticle up</td></tr>
				<tr><td>194</td><td>┬</td><td></td><td></td><td>Alt + 194</td><td>Box drawing character - single line horizontal and verticle down</td></tr>
				<tr><td>195</td><td>├</td><td></td><td></td><td>Alt + 195</td><td>Box drawing character - single verticle and right line</td></tr>
				<tr><td>196</td><td>─</td><td></td><td></td><td>Alt + 196</td><td>Box drawing character - single horizontal line</td></tr>
				<tr><td>197</td><td>┼</td><td></td><td></td><td>Alt + 197</td><td>Box drawing character - single horizontal and verticle line</td></tr>
				<tr><td>198</td><td>ã</td><td>&amp;#227;</td><td>&amp;atilde;</td><td>Alt + 0227</td><td>Latin small letter a with tilde</td></tr>
				<tr><td>199</td><td>Ã</td><td>&amp;#195;</td><td>&amp;Atilde;</td><td>Alt + 0195</td><td>Latin capital letter A with tilde</td></tr>
				<tr><td>200</td><td>╚</td><td></td><td></td><td>Alt + 200</td><td>Box drawing character - double line lower left corner</td></tr>
				<tr><td>201</td><td>╔</td><td></td><td></td><td>Alt + 201</td><td>Box drawing character - double line upper right corner</td></tr>
				<tr><td>202</td><td>╩</td><td></td><td></td><td>Alt + 202</td><td>Box drawing character - double line horizontal and verticle up</td></tr>
				<tr><td>203</td><td>╦</td><td></td><td></td><td>Alt + 203</td><td>Box drawing character - double line horizontal and verticle down</td></tr>
				<tr><td>204</td><td>╠</td><td></td><td></td><td>Alt + 204</td><td>Box drawing character - double verticle and right line</td></tr>
				<tr><td>205</td><td>═</td><td></td><td></td><td>Alt + 205</td><td>Box drawing character - double horizontal line</td></tr>
				<tr><td>206</td><td>╬</td><td></td><td></td><td>Alt + 206</td><td>Box drawing character - double horizontal and verticle line</td></tr>
				<tr><td>207</td><td>¤</td><td>&amp;#164;</td><td>&amp;curren;</td><td>Alt + 0164</td><td>Currency sign</td></tr>
				<tr><td>208</td><td>ð</td><td>&amp;#240;</td><td>&amp;eth;</td><td>Alt + 0240</td><td>Latin small letter eth</td></tr>
				<tr><td>209</td><td>Ð</td><td>&amp;#208;</td><td>&amp;ETH;</td><td>Alt + 0208</td><td>Latin capital letter ETH</td></tr>
				<tr><td>210</td><td>Ê</td><td>&amp;#202;</td><td>&amp;Ecirc;</td><td>Alt + 0202</td><td>Latin capital letter E with circumflex</td></tr>
				<tr><td>211</td><td>Ë</td><td>&amp;#203;</td><td>&amp;Euml;</td><td>Alt + 0203</td><td>Latin capital letter E with diaeresis</td></tr>
				<tr><td>212</td><td>È</td><td>&amp;#200;</td><td>&amp;Egrave;</td><td>Alt + 0200</td><td>Latin capital letter E with grave</td></tr>
				<tr><td>213</td><td>╒</td><td></td><td></td><td>Alt + 213</td><td>Box drawing character - single verticle line</td></tr>
				<tr><td>214</td><td>Í</td><td>&amp;#205;</td><td>&amp;Iacute;</td><td>Alt + 0205</td><td>Latin capital letter I with acute</td></tr>
				<tr><td>215</td><td>Î</td><td>&amp;#206;</td><td>&amp;Icirc;</td><td>Alt + 0206</td><td>Latin capital letter I with circumflex</td></tr>
				<tr><td>216</td><td>Ï</td><td>&amp;#207;</td><td>&amp;Iuml;</td><td>Alt + 0207</td><td>Latin capital letter I with diaeresis</td></tr>
				{/* MAKE CHANGES BELOW */}
				

				{/* FIX 213 */}
				
				<tr><td>130</td><td>&#130;</td><td>&amp;#130;</td><td>&amp;sbquo;</td><td>Alt + 0130</td><td>Single low-9 quotation mark</td></tr>
				<tr><td>131</td><td>{'&#131;'}</td><td>&amp;#131;</td><td>&amp;fnof;</td><td>Alt + 0131 <i>OR</i> Alt + 159</td><td>Latin small letter f with hook</td></tr>
				<tr><td>132</td><td>&#132;</td><td>&amp;#132;</td><td>&amp;bdquo;</td><td>Alt + 0132</td><td>Double low-9 quotation mark</td></tr>
				<tr><td>133</td><td>&#133;</td><td>&amp;#133;</td><td>&amp;hellip;</td><td>Alt + 0133</td><td>Horizontal ellipsis</td></tr>
				<tr><td>134</td><td>&#134;</td><td>&amp;#134;</td><td>&amp;dagger;</td><td>Alt + 0134</td><td>Dagger</td></tr>
				<tr><td>135</td><td>&#135;</td><td>&amp;#135;</td><td>&amp;Dagger;</td><td>Alt + 0135</td><td>Double dagger</td></tr>
				<tr><td>136</td><td>&#136;</td><td>&amp;#136;</td><td>&amp;circ;</td><td>Alt + 0136</td><td>Modifier letter circumflex accent</td></tr>
				<tr><td>137</td><td>&#137;</td><td>&amp;#137;</td><td>&amp;permil;</td><td>Alt + 0137</td><td>Per mille sign</td></tr>
				<tr><td>138</td><td>&#138;</td><td>&amp;#138;</td><td>&amp;Scaron;</td><td>Alt + 0138</td><td>Latin capital letter S with caron</td></tr>
				<tr><td>139</td><td>&#139;</td><td>&amp;#139;</td><td>&amp;lsaquo;</td><td>Alt + 0139</td><td>Single left-pointing angle quotation</td></tr>
				<tr><td>140</td><td>&#140;</td><td>&amp;#140;</td><td>&amp;OElig;</td><td>Alt + 0140</td><td>Latin capital ligature OE</td></tr>
				<tr><td>141</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
				<tr><td>142</td><td>&#142;</td><td>&amp;#142;</td><td>&nbsp;</td><td>Alt + 0142</td><td>Latin captial letter Z with caron</td></tr>
				<tr><td>143</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
				<tr><td>144</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
				<tr><td>145</td><td>&#145;</td><td>&amp;#145;</td><td>&amp;lsquo;</td><td>Alt + 0145</td><td>Left single quotation mark</td></tr>
				<tr><td>146</td><td>&#146;</td><td>&amp;#146;</td><td>&amp;rsquo;</td><td>Alt + 0146</td><td>Right single quotation mark</td></tr>
				<tr><td>147</td><td>&#147;</td><td>&amp;#147;</td><td>&amp;ldquo;</td><td>Alt + 0147</td><td>Left double quotation mark</td></tr>
				<tr><td>148</td><td>&#148;</td><td>&amp;#148;</td><td>&amp;rdquo;</td><td>Alt + 0148</td><td>Right double quotation mark</td></tr>
				<tr><td>149</td><td>&#149;</td><td>&amp;#149;</td><td>&amp;bull;</td><td>Alt + 0149</td><td>Bullet</td></tr>
				<tr><td>150</td><td>&#150;</td><td>&amp;#150;</td><td>&amp;ndash;</td><td>Alt + 0150</td><td>En dash</td></tr>
				<tr><td>151</td><td>&#151;</td><td>&amp;#151;</td><td>&amp;mdash;</td><td>Alt + 0151</td><td>Em dash</td></tr>
				<tr><td>152</td><td>&#152;</td><td>&amp;#152;</td><td>&amp;tilde;</td><td>Alt + 0152</td><td>Small tilde</td></tr>
				<tr><td>153</td><td>&#153;</td><td>&amp;#153;</td><td>&amp;trade;</td><td>Alt + 0153</td><td>Trade mark sign</td></tr>
				<tr><td>154</td><td>&#154;</td><td>&amp;#154;</td><td>&amp;scaron;</td><td>Alt + 0154</td><td>Latin small letter S with caron</td></tr>
				<tr><td>155</td><td>&#155;</td><td>&amp;#155;</td><td>&amp;rsaquo; </td><td>Alt + 0155</td><td>Single right-pointing angle quotation mark</td></tr>
				<tr><td>156</td><td>&#156;</td><td>&amp;#156;</td><td>&amp;oelig;</td><td>Alt + 0156</td><td>Latin small ligature oe</td></tr>
				<tr><td>157</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
				<tr><td>158</td><td>&#158;</td><td>&amp;#158;</td><td>&nbsp;</td><td>Alt + 0158</td><td>Latin small letter z with caron</td></tr>
				<tr><td>159</td><td>&#159;</td><td>&amp;#159;</td><td>&amp;Yuml;</td><td>Alt + 0159</td><td>Latin capital letter Y with diaeresis</td></tr>
				<tr><td>160</td><td>&nbsp;</td><td>&amp;#160;</td><td>&amp;nbsp;</td><td>Alt + 0160</td><td>Non-breaking space</td></tr>
				<tr><td>166</td><td>¦</td><td>&amp;#166;</td><td>&amp;brvbar;</td><td>Alt + 0166</td><td>Pipe or broken vertical bar</td></tr>
				<tr><td>167</td><td>§</td><td>&amp;#167;</td><td>&amp;sect;</td><td>Alt + 0167 <i>OR</i> Alt + 21</td><td>Section sign</td></tr>
				<tr><td>168</td><td>¨</td><td>&amp;#168;</td><td>&amp;uml;</td><td>Alt + 0168</td><td>Spacing diaeresis or umlaut</td></tr>
				<tr><td>173</td><td>­</td><td>&amp;#173;</td><td>&amp;shy;</td><td>Alt + 0173</td><td>Soft hyphen</td></tr>
				<tr><td>175</td><td>¯</td><td>&amp;#175;</td><td>&amp;macr;</td><td>Alt + 0175</td><td>Spacing macron or overline</td></tr>
				<tr><td>177</td><td>±</td><td>&amp;#177;</td><td>&amp;plusmn;</td><td>Alt + 0177</td><td>Plus-or-minus sign</td></tr>
				<tr><td>178</td><td>²</td><td>&amp;#178;</td><td>&amp;sup2;</td><td>Alt + 0178</td><td>Superscript two or squared</td></tr>
				<tr><td>179</td><td>³</td><td>&amp;#179;</td><td>&amp;sup3;</td><td>Alt + 0179</td><td>Superscript three or cubed</td></tr>
				<tr><td>180</td><td>´</td><td>&amp;#180;</td><td>&amp;acute;</td><td>Alt + 0180</td><td>Acute accent or spacing acute</td></tr>
				<tr><td>181</td><td>µ</td><td>&amp;#181;</td><td>&amp;micro;</td><td>Alt + 0181</td><td>Micro sign</td></tr>
				<tr><td>182</td><td>¶</td><td>&amp;#182;</td><td>&amp;para;</td><td>Alt + 0182 <i>OR</i> Alt + 20</td><td>Pilcrow sign or paragraph sign</td></tr>
				<tr><td>183</td><td>·</td><td>&amp;#183;</td><td>&amp;middot;</td><td>Alt + 0183</td><td>Middle dot or Georgian comma</td></tr>
				<tr><td>184</td><td>¸</td><td>&amp;#184;</td><td>&amp;cedil;</td><td>Alt + 0184</td><td>Spacing cedilla</td></tr>
				<tr><td>185</td><td>¹</td><td>&amp;#185;</td><td>&amp;sup1;</td><td>Alt + 0185</td><td>Superscript one</td></tr>
				<tr><td>186</td><td>º</td><td>&amp;#186;</td><td>&amp;ordm;</td><td>Alt + 0186 <i>OR</i> Alt + 167</td><td>Masculine ordinal indicator</td></tr>
				<tr><td>190</td><td>¾</td><td>&amp;#190;</td><td>&amp;frac34;</td><td>Alt + 0190</td><td>Fraction three quarters</td></tr>
				<tr><td>204</td><td>Ì</td><td>&amp;#204;</td><td>&amp;Igrave;</td><td>Alt + 0204</td><td>Latin capital letter I with grave</td></tr>
				<tr><td>210</td><td>Ò</td><td>&amp;#210;</td><td>&amp;Ograve;</td><td>Alt + 0210</td><td>Latin capital letter O with grave</td></tr>
				<tr><td>211</td><td>Ó</td><td>&amp;#211;</td><td>&amp;Oacute;</td><td>Alt + 0211</td><td>Latin capital letter O with acute</td></tr>
				<tr><td>212</td><td>Ô</td><td>&amp;#212;</td><td>&amp;Ocirc;</td><td>Alt + 0212</td><td>Latin capital letter O with circumflex</td></tr>
				<tr><td>213</td><td>Õ</td><td>&amp;#213;</td><td>&amp;Otilde;</td><td>Alt + 0213</td><td>Latin capital letter O with tilde</td></tr>		
				<tr><td>217</td><td>Ù</td><td>&amp;#217;</td><td>&amp;Ugrave;</td><td>Alt + 0217</td><td>Latin capital letter U with grave</td></tr>
				<tr><td>218</td><td>Ú</td><td>&amp;#218;</td><td>&amp;Uacute;</td><td>Alt + 0218</td><td>Latin capital letter U with acute</td></tr>
				<tr><td>219</td><td>Û</td><td>&amp;#219;</td><td>&amp;Ucirc;</td><td>Alt + 0219</td><td>Latin capital letter U with circumflex</td></tr>
				<tr><td>221</td><td>Ý</td><td>&amp;#221;</td><td>&amp;Yacute;</td><td>Alt + 0221</td><td>Latin capital letter Y with acute</td></tr>
				<tr><td>222</td><td>Þ</td><td>&amp;#222;</td><td>&amp;THORN;</td><td>Alt + 0222</td><td>Latin capital letter THORN</td></tr>
				<tr><td>223</td><td>ß</td><td>&amp;#223;</td><td>&amp;szlig;</td><td>Alt + 0223 <i>OR</i> Alt + 225;</td><td>Latin small letter sharp s - ess-zed</td></tr>
				<tr><td>245</td><td>õ</td><td>&amp;#245;</td><td>&amp;otilde;</td><td>Alt + 0245</td><td>Latin small letter o with tilde</td></tr>
				<tr><td>247</td><td>÷</td><td>&amp;#247;</td><td>&amp;divide;</td><td>Alt + 0247</td><td>Division sign</td></tr>
				<tr><td>253</td><td>ý</td><td>&amp;#253;</td><td>&amp;yacute;</td><td>Alt + 0253</td><td>Latin small letter y with acute</td></tr>
				<tr><td>254</td><td>þ</td><td>&amp;#254;</td><td>&amp;thorn;</td><td>Alt + 0254</td><td>Latin small letter thorn</td></tr>
				
			</tbody>
		</table>
    );
}

export default Body;