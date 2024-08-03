pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Installing...'
                sh 'npm ci'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
