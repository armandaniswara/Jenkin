pipeline {
    agent any
    stages {
        stage('Checkout Info') {
            steps {
                echo 'Kode berhasil diambil dari GitHub'
                bat 'dir'
            }
        }
        stage('Install Dependencies') {
            steps {
                bat 'node --version'
                bat 'npm --version'
            }
        }
        stage('Build') {
            steps {
                echo 'Mengecek sintaks kode...'
                bat 'node -c kalkulator.js'
            }
        }
        stage('Test') {
            steps {
                echo 'Menjalankan unit test...'
                bat 'npm test'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Semua tahap lolos, siap deploy!'
            }
        }
    }
}