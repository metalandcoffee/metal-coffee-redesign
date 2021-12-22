// https://gruntjs.com/configuring-tasks
// https://www.npmjs.com/package/grunt-sass

module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // Tasks
        sass: {
            dist: {
                options: {
                    sourcemap: 'none',
                    style: 'expanded'
                },
                files: [
                    {
                        'style.css': 'style.scss',
                    },
                ],
            },
        },
        watch: {
            scripts: {
                files: ['style.scss'],
                tasks: ['sass'],
                options: {
                    spawn: false,
                },
            },
        },
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['watch'])
}
