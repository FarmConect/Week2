// Initialize empty array to store scores - Week 2 concept: Arrays
let scores = [];

// Function to calculate grade - keeping it simple for Week 2
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
        alert('Please enter all subject scores!');
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
        alert('Please enter scores between 0 and 100!');
        return;
    }
    
    // Add scores to array using push method - Week 2 concept: array methods
    scores.push(mathNum);
    scores.push(englishNum);
    scores.push(scienceNum);
    scores.push(historyNum);
    scores.push(artNum);
    
    // Calculate average manually (no loops allowed) - Week 2 concept: arithmetic operators
    let total = scores[0] + scores[1] + scores[2] + scores[3] + scores[4];
    let average = total / scores.length;
    
    // Determine letter grade - Week 2 concept: comparison operators
    let letterGrade = '';
    let gradeClass = '';
    
    if (average >= 90) {
        letterGrade = 'A';
        gradeClass = 'grade-a';
    } else if (average >= 80) {
        letterGrade = 'B';
        gradeClass = 'grade-b';
    } else if (average >= 70) {
        letterGrade = 'C';
        gradeClass = 'grade-c';
    } else if (average >= 60) {
        letterGrade = 'D';
        gradeClass = 'grade-d';
    } else {
        letterGrade = 'F';
        gradeClass = 'grade-f';
    }
    
    // Display results - Week 2 concept: DOM manipulation, template literals
    let resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `
        <div class="average-display">
            Your Average Score: ${average.toFixed(1)}%
        </div>
        <div class="grade-display ${gradeClass}">
            Grade: ${letterGrade}
        </div>
        <div class="scores-list">
            <h3>📝 Your Subject Scores:</h3>
            <p>Mathematics: ${scores[0]}</p>
            <p>English: ${scores[1]}</p>
            <p>Science: ${scores[2]}</p>
            <p>History: ${scores[3]}</p>
            <p>Art: ${scores[4]}</p>
            <p><strong>Total Subjects: ${scores.length}</strong></p>
        </div>
    `;
    
    // Show results section
    resultsDiv.classList.add('show');
}