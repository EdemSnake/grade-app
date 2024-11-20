
document.getElementById('generateFields').addEventListener('click', function () {

    const subjectCount = parseInt(document.getElementById('subjectCount').value);
    const marksSection = document.getElementById('marksSection');
    const marksFields = document.getElementById('marksFields');


    if (isNaN(subjectCount) || subjectCount <= 0) {
        alert("Input quantity");
        return;
    }


    marksFields.innerHTML = '';


    for (let i = 1; i <= subjectCount; i++) {
        const fieldContainer = document.createElement('div');
        fieldContainer.classList.add('form-group');
        fieldContainer.innerHTML = `
            <label for="subject${i}">Grafe for subject${i}:</label>
            <input type="number" id="subject${i}" min="0" max="100" required>
        `;
        marksFields.appendChild(fieldContainer);
    }


    marksSection.classList.remove('hidden');
});


document.getElementById('calculateResults').addEventListener('click', function () {
    const marksFields = document.getElementById('marksFields').children;
    let totalMarks = 0;
    let subjectCount = marksFields.length;


    for (let i = 0; i < subjectCount; i++) {
        const input = marksFields[i].querySelector('input');
        const marks = parseFloat(input.value);

        if (isNaN(marks) || marks < 0 || marks > 100) {
            alert("Type correct grade");
            return;
        }

        totalMarks += marks;
    }


    const averageMarks = (totalMarks / subjectCount).toFixed(2);
    document.getElementById('averageMarks').textContent = `Your average grade is: ${averageMarks}`;
    document.getElementById('resultsSection').classList.remove('hidden');
});
