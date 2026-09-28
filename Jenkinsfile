pipeline {
    agent any
    
    options {
        skipDefaultCheckout()
        disableConcurrentBuilds()
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build') {
            steps {
                echo 'Building the application'
                sh 'npm run ci'
                sh 'npm run build'
            }
        }

        stage('Deploy') {
            when {
                branch 'main'
            }
            steps {
                echo 'Deploying the application'
                sh '''
                    DEPLOY_DIR=/home/jenkins/apps/node-demo
                    install -d "$DEPLOY_DIR/dist"
                    rsync -a --delete dist/ "$DEPLOY_DIR/dist"
                    cp package.json package-lock.json "$DEPLOY_DIR/"
                    cd "$DEPLOY_DIR"
                    npm ci --omit=dev
                    sudo systemctl restart node-demo
                '''
            }
        }
    }
}