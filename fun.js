// Role permissions
const permissions = {
    admin: ['manageUsers', 'createNotices', 'updateNotices', 'deleteNotices', 'createTimetables', 'updateTimetables', 'deleteTimetables'],
    teacher: ['createAssignments', 'deleteAssignments', 'viewMarks', 'editMarks', 'markAttendance', 'shareNotes'],
    student: ['viewTimetables', 'viewNotices', 'viewMarks', 'accessNotes', 'submitAssignments']
};

// Function to validate access based on role and selected actions
function validateAccess() {
    const selectedRole = document.getElementById('role').value;
    const selectedActions = document.querySelectorAll('input[name="access"]:checked');
    let selectedActionValues = Array.from(selectedActions).map(action => action.value);

    // Get valid actions for the selected role
    let validActions = permissions[selectedRole];

    // Initialize empty arrays for allowed and disallowed actions
    let disallowedActions = [];

    // If the role is not selected, show a message
    if (!selectedRole) {
        alert('Please select a role before choosing actions.');
        return;
    }

    // Validate selected actions
    selectedActionValues.forEach(action => {
        if (!validActions.includes(action)) {
            disallowedActions.push(action);
        }
    });

    // If there are disallowed actions, show error message
    if (disallowedActions.length > 0) {
        alert('Error: You do not have permission to perform the following actions: ' + disallowedActions.join(', '));
    } else {
        alert('You can do that task. All selected actions are allowed for your role.');
    }
}
