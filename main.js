// Initialize empty array to store scores - Week 2 concept: Arrays
let scores = [];

// Function to calculate grade - Week 2
function calculateGrade() {
    // Clear the scores array for fresh calculation
    scores = [];
    
    // Get values from each input - Week 2 concept: DOM basics
    let mathScore = document.getElementById('math').value;
    let englishScore = document.getElementById('english').value;
    let scienceScore = document.getElementById('science').value;
    let historyScore = document.getElementById('history').value;
    let artScore = document.getElementById('art').value;
    
    // Check if all fields have values - Week 2 concept: comparison operators
    if (mathScore === '' || englishScore === '' || scienceScore === '' || historyScore === '' || artScore === '') {
        console.log('⚠️ Please enter all subject scores!');
        return;
    }
    
    // Convert strings to numbers and add to array - Week 2 concepts: data types, arrays
    let mathNum = Number(mathScore);
    let englishNum = Number(englishScore);
    let scienceNum = Number(scienceScore);
    let historyNum = Number(historyScore);
    let artNum = Number(artScore);
    
    // Validate scores are between 0 and 100
    if (mathNum < 0 || mathNum > 100 || englishNum < 0 || englishNum > 100 || 
        scienceNum < 0 || scienceNum > 100 || historyNum < 0 || historyNum > 100 || 
        artNum < 0 || artNum > 100) {
        console.log('⚠️ Please enter scores between 0 and 100!');
        return;
    }
    
    // Add scores to array using push method - Week 2 concept: array methods
    scores.push(mathNum);
    scores.push(englishNum);
    scores.push(scienceNum);
    scores.push(historyNum);
    scores.push(artNum);
    
    // Calculate average manually (no loops yet) - Week 2 concept: arithmetic operators
    let total = scores[0] + scores[1] + scores[2] + scores[3] + scores[4];
    let average = total / scores.length;
    
    // Determine letter grade - Week 2 concept: comparison operators
    let letterGrade = '';
    if (average >= 90) {
        letterGrade = 'A';
    } else if (average >= 80) {
        letterGrade = 'B';
    } else if (average >= 70) {
        letterGrade = 'C';
    } else if (average >= 60) {
        letterGrade = 'D';
    } else {
        letterGrade = 'F';
    }
    
    // ✅ Output to console instead of DOM
    console.log("📊 --- Grade Report ---");
    console.log("Mathematics: " + scores[0]);
    console.log("English: " + scores[1]);
    console.log("Science: " + scores[2]);
    console.log("History: " + scores[3]);
    console.log("Art: " + scores[4]);
    console.log("----------------------");
    console.log("Total Subjects: " + scores.length);
    console.log("Average Score: " + average.toFixed(1) + "%");
    console.log("Final Grade: " + letterGrade);
    console.log("----------------------");
}
