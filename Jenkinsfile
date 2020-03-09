pipeline {
  agent any
  stages {
    stage('Clear') {
      steps {
        sh '''rm -rf ./node_modules
npm install --cache /tmp/empty-cache'''
      }
    },
    stage('Build') {
      steps {
        sh '''npm run-script build'''
      }
    },
    stage('Deploy') {
      steps {
        sh '''rm -rf /var/www/dennisvdberg
mv /var/lib/jenkins/workspace/dennisvdberg/dist/dennisvdberg /var/www'''
      }
    },
  }
}
