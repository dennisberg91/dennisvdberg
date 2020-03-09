pipeline {
  agent any
  stages {
    stage('SCM') {
      steps {
        echo 'Pulling for git'
        git(url: 'https://github.com/dennisberg91/dennisvdberg.git', branch: 'master', poll: true, changelog: true, credentialsId: '	0371ee40-8e0b-4685-8a6b-a68404b69126')
      }
    }

    stage('NPM') {
      steps {
        sh '''rm -rf ./node_modules
npm install --cache /tmp/empty-cache'''
      }
    }

    stage('BUILD') {
      steps {
        echo 'Building project'
        sh 'npm run-script build'
      }
    }
    
    stage('TEST') {
      steps {
        sh 'cypress run'
      }
    }

    stage('DEPLOY') {
      steps {
        echo 'Deploy code'
        sh '''rm -rf /var/www/dennisvdberg
mv  /var/lib/jenkins/workspace/dennisvdberg.nl_master/dist/dennisvdberg /var/www'''
      }
    }

  }
  tools {
    nodejs 'npm'
  }
}
