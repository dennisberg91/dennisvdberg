pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh '''rm -rf ./node_modules
npm install --cache /tmp/empty-cache'''
      }
    }

  }
}