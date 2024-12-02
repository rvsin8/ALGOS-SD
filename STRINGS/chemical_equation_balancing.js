/*
Check whether the string s is a balanced chemical equation. The equation represents 
a chemical reaction that changes matter from one form to another, and since matter cannot be destroyed, valid equations must be balanced. 
Matter is made of molecules, and molecules are made of atoms. 
A balanced equation means that both sides have the same number of every atom.

An atom is a string that starts with an uppercase English letter followed by some or no lowercase English letters. 
For example, "A" and "Abc" are 1 atom each, but "FG" is 2 atoms, "F" and "G", and "hello" is invalid. 

A molecule is one or more atoms next to each other with no spaces between. HO is a molecule consisting of a single hydrogen and single oxygen atom. 
An atom in a molecule may be followed by a number which indicates the number of times that atom occurs in the molecule, so H2O is two hydrogens and one oxygen.

In an equation, a molecule can optionally be prefixed with a molecule coefficient that indicates the number of those molecules available. 
So 2H2O means two molecules, so a total of 4 hydrogen and one oxygen.

The chemical equation itself is then is a string in the following format: molecule (+ molecule)* = molecule (+ molecule)*, where " * " 
means it repeats 0+ times. For example, "A = B", "A = B + C", and "A + B + C = D + E + F" are chemical equations but "X + Y = ", "X = + Z" are not.


Example(s)
For s = "2H2 + O2 = 2H2O", the output is True.
Left side: 4 * "H" and "2 * O"
Right side: 4 * "H" and "2 * O"

For s = "1000H2O = Au + Ag", the output is False.
Left side: 2000 * "H" and "1000 * O"
Right side: 1 * "Ag" and "1 * Au"
*/
function is_balanced(s) {
    const [lhs, rhs] = s.split('=');
    const left_counts = parse_side(lhs);
    const right_counts = parse_side(rhs);
    return objAreEqual(left_counts, right_counts);
};

function parse_molecule(molecule, counts) {
    let coefficient = 1;
    let i = 0;
    while (i < molecule.length) {
        if (/\d/.test(molecule[i])) {
            // Extract the coefficient
            let digit = '';
            while (/\d/.test(molecule[i])) {
                digit += molecule[i];
                i++;
            }
            coefficient = parseInt(digit);
        } else {
            // Extract the element name
            let element = molecule[i];
            i++;
            while (i < molecule.length && /[a-z]/.test(molecule[i])) {
                element += molecule[i];
                i++;
            }
            // Extract the count
            let count = '';
            while (i < molecule.length && /\d/.test(molecule[i])) {
                count += molecule[i];
                i++;
            }

            count = count ? parseInt(count) : 1;
            count *= coefficient;
            counts[element] = (counts[element] || 0) + count;
        }
    }
    return counts;
};

function parse_side(side) {
    const molecules = side.replace(/\s/g, '').split('+');
    let counts = {};
    for (let molecule of molecules) {
        counts = parse_molecule(molecule, counts);
    }
    return counts;
};

function objAreEqual(a, b) {
    if (typeof a !== 'object' || typeof a !== typeof b) return false;
    const aKeys = Object.keys(a);
    const bKeys = Object.keys(b);
    if (aKeys.length !== bKeys.length) return false;
    for (const key of aKeys) {
        if (b[key] === undefined) return false;
        if (a[key] !== b[key]) return false;
    }
    return true;
};

console.log(is_balanced("2H2 + O2 = 2H2O")); // true
console.log(is_balanced("1000H2O = Au + Ag")); // false
console.log(is_balanced("C6H12O6 + 6O2 = 6CO2 + 6H2O")); // true
console.log(is_balanced("CH4 + 2O2 = CO2 + 2H2O")); // true
